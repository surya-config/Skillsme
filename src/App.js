import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
