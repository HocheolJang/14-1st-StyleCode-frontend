import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

ReactDOM.render(<Routes />, document.getElementById("root"));
