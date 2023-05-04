import React, { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
     render() {
          return (
               <div className="container d-flex justify-content-center">
                    <div className="loading">
                         <span />
                         <span />
                         <span />
                         <span />
                         <span />
                    </div>
               </div>
          );
     }
}
