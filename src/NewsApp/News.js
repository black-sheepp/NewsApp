import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
     articles = [];
     constructor() {
          super();
          this.state = {
               articles: this.articles,
               loading: false,
               page: 1,
          };
     }

     async componentDidMount() {
          let url =
               "https://newsapi.org/v2/everything?q=tesla&from=2023-03-29&sortBy=publishedAt&apiKey=be082017bae842fc877e1798503d251f&pageSize=20";

          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);
          this.setState({ articles: parseData.articles });
     }

     handleNextClick = async () => {
          let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-29&sortBy=publishedAt&apiKey=be082017bae842fc877e1798503d251f&page=${
               this.state.page + 1
          }&pageSize=20`;

          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);

          this.setState({
               page: this.state.page + 1,
               articles: parseData.articles,
          });
     };
     handlePrevClick = async () => {
          let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-29&sortBy=publishedAt&apiKey=be082017bae842fc877e1798503d251f&page=${
               this.state.page - 1
          }&pageSize=20`;

          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);

          this.setState({
               page: this.state.page - 1,
               articles: parseData.articles,
          });
     };

     render() {
          return (
               <div className="container mx-6 my-3">
                    <h1>Headlines Today</h1>
                    <div className="row">
                         {this.state.articles.map((element) => {
                              return (
                                   <div className="col-md-3" key={element.url}>
                                        <NewsItems
                                             title={element.title}
                                             description={element.description}
                                             imageURL={element.urlToImage}
                                             newsURL={element.url}
                                        />
                                   </div>
                              );
                         })}
                    </div>
                    <div className="container d-flex justify-content-between">
                         <button
                              disabled={this.state.page <= 1}
                              onClick={this.handlePrevClick}
                              type="button"
                              class="btn btn-dark"
                         >
                              &larr; Prev
                         </button>
                         <button onClick={this.handleNextClick} type="button" class="btn btn-dark">
                              Next &rarr;
                         </button>
                    </div>
               </div>
          );
     }
}
