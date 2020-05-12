import React from "react";
import { createMemoryHistory } from "history";
import {Provider} from 'mobx-react'
  import ProductService from "../services/ProductService";
  import getUserProductResponse from "../fixtures/getProductResponse/index.json";
  import ProductStore from "../stores/ProductStore/index";
  import { render, fireEvent, waitFor} from "@testing-library/react";
  import { Router,Route, withRouter } from "react-router-dom";
  import {PRODUCT_PATH} from '../constants/RouteConstants';
import { SIGN_IN_PATH } from "../../Authentication/constants/RouteConstants";
import AuthStore from "../../Authentication/stores/AuthStore";
import ProductRouts from "./productRouts";
import CartStore from "../stores/CartStore";




  const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
  ));
  
  describe("ProductsRoute Tests", () => {
    let productsAPI;
    let productStore;
    let authStores;
    let cartStore
  
    beforeEach(() => {
      productsAPI = new ProductService();
      productStore = new ProductStore(productsAPI);
      authStores = new AuthStore()
      cartStore=new CartStore(productStore)
    });

    it("Should test error",async()=>{
      const mockFailurePromise = new Promise(function(resolve, reject) {
        reject(new Error("error"));
      })//.catch(() => {});
      const mockProductAPI = jest.fn();
      mockProductAPI.mockReturnValue(mockFailurePromise);
      productsAPI.getProductsAPI = mockProductAPI;
      const { getByText} = render(
        <Provider {...{productStore,authStores,cartStore}}>
        <Router history={createMemoryHistory()}>
          <ProductRouts/>
        </Router>
        </Provider>
      );

      await waitFor(() => {
          getByText(/Retry/i);
       });
    })

    // it("should press signOut", () => {
    //   const { getByPlaceholderText, getByRole } = render(
    //     <Provider {...{productStore,authStores,cartStore}}>
    //     <Router history={createMemoryHistory()}>
    //       <ProductRouts/>
    //     </Router>
    //     </Provider>
    //   );
      
    //   const signOutButton = getByRole("button", { name: "Sign Out" });
    //   fireEvent.click(signOutButton);

    //   productStore.init()
    //   authStores.signOut()
    //   const history = createMemoryHistory();
    //   history.replace(SIGN_IN_PATH);
    // })

  });
  


