import React,{Suspense,lazy} from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header";
import { Switch, Route, Redirect } from "react-router-dom";
const HomePage = lazy(() => import('./pages/homepage/homepage'))

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SigInAndSignUpPage />
            }
          /> */}
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
