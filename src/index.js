import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ReverseWordsApp from "./App";


ReactDOM.render(<h1 className="headerTxt">REVERSE STRING GENERATOR</h1>, document.getElementById("head"));

ReactDOM.render(<ReverseWordsApp />, document.getElementById("root"));

ReactDOM.render(<div className="footerTxt">
    <a href="/" className="icon icon1"><i class="fa-brands fa-github"></i></a>
    <a href="/" className="icon icon2"><i class="fa-brands fa-instagram"></i></a>
    <a href="/" className="icon icon3"><i class="fa-brands fa-twitter"></i></a>
</div>, document.getElementById("foot"));


