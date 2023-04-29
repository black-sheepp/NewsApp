import React, { Component } from "react";

export default class NewsItems extends Component {
     render() {
        let {title, description, imageURL, newsURL} = this.props;
          return (
               <div className="card mb-3" style={{ width: "20rem" }}>
                    <img src={`${imageURL}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">
                              {description}
                         </p>
                         <a href={`${newsURL}`} target="_blank" rel={`${newsURL}`} className="btn btn-sm btn-primary">
                              Read More...
                         </a>
                    </div>
               </div>
          );
     }
}
