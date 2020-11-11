import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.css";

// exact={true}는 "/" 만 처리가 되게 하는 것.
// exact 를 하지 않으면 /about 했을때 / 도 읽기때문.
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
