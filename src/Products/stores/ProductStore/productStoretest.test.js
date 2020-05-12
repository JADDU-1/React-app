import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
  } from "@ib/api-constants";
  import ProductService from "../../services/ProductService";
  import getUserProductResponse from "../../fixtures/getProductResponse/index.json";
  import ProductStore from "./index";

  describe("ProductStore Tests", () => {
    let productAPI
    let productStore
  
    beforeEach(() => {
      productAPI = new ProductService();
      productStore = new ProductStore(productAPI);
    })

    it("should test initialising product store", () => {
      expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
      expect(productStore.getProductListAPIError).toBe(null);
      expect(productStore.productList).toEqual([]);
      expect(productStore.sizeFilter).toEqual([]);
      expect(productStore.sortBy).toBe('SELECT');

    });

    it("should test productAPI data fetching state", () => {
  
      const mockLoadingPromise = new Promise(function(resolve, reject) {});
      const mockProductAPI = jest.fn();
      mockProductAPI.mockReturnValue(mockLoadingPromise);
      productAPI.getProductsAPI = mockProductAPI;
  
      productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });

    it("should test productAPI success state", async () => {
  
      const mockSuccessPromise =Promise.resolve(getUserProductResponse);
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockSuccessPromise);
      productAPI.getProductsAPI = mockSignInAPI;
  
      await productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
      //expect(onSuccess).toBeCalled();
    });

    it("should test productAPI failure state", async () => {
      
      const mockFailurePromise = new Promise(function(resolve, reject) {
        reject(new Error("error"));
      });
  
      const mockProductAPI = jest.fn();
      mockProductAPI.mockReturnValue(mockFailurePromise);
      productAPI.getProductsAPI = mockProductAPI;
  
      //productStore = new ProductStore(productAPI);
      await productStore.getProductList();
  
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
      expect(productStore.getProductListAPIError).toBe("error");
      //expect(onFailure).toBeCalled();
    });

    it("should test sorted prices order",() => {
      let price="Lowest to highest"
      productStore.productList=[{price:1},{price:3},{price:2}]
      productStore.onChangeSortBy(price)
      expect(productStore.sortedAndFilteredProducts).toStrictEqual([{price:1},{price:2},{price:3}]); 
      
      price="Highest to lowest"
      productStore.onChangeSortBy(price)
      expect(productStore.sortedAndFilteredProducts).toStrictEqual([{price:3},{price:2},{price:1}]);
      expect(productStore.totalNoOfProductsDisplayed).toBe(3);
     
    })

    it("should test sorted sizes",() => {
      productStore.sizeFilter=["M"]
      productStore.onSelectSize("L")
      productStore.productList=[{price:1,availableSizes:["XL"]},{price:3,availableSizes:["M","L"]},{price:2,availableSizes:["L"]}]
      expect(productStore.sortedAndFilteredProducts[0].availableSizes).toEqual(["M","L"]);

      productStore.sizeFilter=["M","L"]
      productStore.onSelectSize("L")
      expect(productStore.sizeFilter).toEqual(["M"]);
    })
  })