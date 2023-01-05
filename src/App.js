import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddStockPage from "./pages/AddStockPage";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import { StockScreen } from "./pages/StockScreen";
import FinanceScreen from "./pages/FinanceScreen";
import CarScreen from "./pages/CarScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/stocks/add">
          <AddStockPage />
        </Route>
        <Route exact path="/stock">
          <StockScreen />
        </Route>
        <Route exact path="/car">
          <CarScreen />
        </Route>
        <Route exact path="/finance">
          <FinanceScreen />
        </Route>
        <Route exact path="/home">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
