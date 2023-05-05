import React, { Component } from "react";

export default class NewsItems extends Component {
     render() {
        let {title, description, imageURL, newsURL, author, onDate} = this.props;
          return (
               <div className="card mb-3" >
                    <img src={`${imageURL}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">
                              {description}
                         </p>
                         <p className="card-text"><small className="text-muted">{author} on {new Date(onDate).toGMTString()}</small></p>
                         <a href={`${newsURL}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
                              Read More...
                         </a>
                    </div>
               </div>
          );
     }
}
