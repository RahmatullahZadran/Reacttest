import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title" style={{ cursor: 'pointer' }} onClick={props.onClick}>{props.children}</h1>;
}



export default Title;
