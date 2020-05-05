import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
  } from "@ib/api-constants";
  import Cookie from 'js-cookie'
  import ProductService from "../../services/ProductService";
  import getUserProductResponse from "../../fixtures/getProductResponse/index.json";
  import ProductStore from "./index";
//import { extendObservableObjectWithProperties } from "mobx/lib/internal";

  let mockSetCookie=jest.fn();
  let mockRemoveCookie=jest.fn();

  Cookie.set=mockSetCookie;
  Cookie.remove=mockRemoveCookie
  
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
      //expect(mockSetCookie).toBeCalled();
      //expect(onSuccess).toBeCalled();
    });

    it("should test productAPI failure state", async () => {
      
      const mockFailurePromise = new Promise(function(resolve, reject) {
        reject(new Error("error"));
      });
  
      const mockProductAPI = jest.fn();
      mockProductAPI.mockReturnValue(mockFailurePromise);
      productAPI.getProductsAPI = mockProductAPI;
  
      productStore = new ProductStore(productAPI);
      await productStore.getProductList();
  
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
      expect(productStore.getProductListAPIError).toBe("error");
      //expect(onFailure).toBeCalled();
    });

    it("should test prices order",() => {
      let price="Lowest to highest"
      productStore.onChangeSortBy(price)
      let sorted="ASCENDING";
      expect(productStore.sortBy).toBe(sorted);
    })
  })