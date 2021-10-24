import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
 const app = document.getElementById("root");
 return(
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/user" component={User} />
   </Switch>
   </BrowserRouter>,
   app
 )
 );
 }
export default App;