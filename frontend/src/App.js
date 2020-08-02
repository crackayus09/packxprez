import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { LoginPage as UserLogin } from "./components/users/LoginPage";
import { LoginPage as CorporateLogin } from "./components/corporate/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" exact component={UserLogin}></Route>
      <Route path="/clogin" exact component={CorporateLogin}></Route>
    </BrowserRouter>
  );
}

export default App;
