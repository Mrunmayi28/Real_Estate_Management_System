import React from "react";
import {Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
   

    function Home() {

        return (
          <div>
            <h1 align = "center">Welcome to the Home Page!</h1>
            <br></br>
            <Link to="/user">
            <button class="btn btn-primary" type="submit">Get Property</button>
            </Link>
          </div>
        );

    }

    export default Home;