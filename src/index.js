import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

render(<Router/>, document.querySelector("#main"));




//Initially rendered as App.js file - once imported Router - swap to router. 
// App.js, etc. will be indirectly ref. via router 