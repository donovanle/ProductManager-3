import {BrowserRouter, Route, Switch} from "react-router-dom"
import AllProducts from "./views/AllProducts";
import CreateProduct from "./views/CreateProduct";
import EditProduct from "./views/EditProduct";
import OneProduct from "./views/OneProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <CreateProduct/>
          <AllProducts/>
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
