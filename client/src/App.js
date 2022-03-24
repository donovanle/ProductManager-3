import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
//import AllProducts from "./views/AllProducts";
//import CreateProduct from "./views/CreateProduct";
import EditProduct from "./views/EditProduct";
import Main from "./views/Main";
import OneProduct from "./views/OneProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route exact path="/products/:id">
          <OneProduct/>
        </Route>
        <Route exact path="/:id/edit">
          <EditProduct/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
