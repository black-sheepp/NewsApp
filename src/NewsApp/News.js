import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from "prop-types";

export default class News extends Component {
     static defaultProps = {
          country: "in",
          pageSize: 15,
          category: "general",
     };
     PropTypes = {
          country: PropTypes.string,
          pageSize: PropTypes.number,
          category: PropTypes.string,
     };

     constructor(props) {
          super(props);
          this.state = {
               articles: [],
               loading: false,
               page: 1,
          };
          document.title = `News Monkey | ${this.capitalize((this.props.category==="general"? "Home":this.props.category))}`
     }

     async updateNews() {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbde2314305248488f3f38e2224ab602&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true });
          let data = await fetch(url);
          let parseData = await data.json();
          this.setState({ articles: parseData.articles, loading: false });
     }

     async componentDidMount() {
          this.updateNews();
     }

     handleNextClick = async () => {
          await this.setState({ page: this.state.page + 1 });
          this.updateNews();
     };
     handlePrevClick = async () => {
          await this.setState({ page: this.state.page - 1 });
          this.updateNews();
     };

     capitalize(word) {
          let x = word.slice(1);
          return word.charAt(0).toUpperCase() + x;
     }

     render() {
          return (
               <div className="container mx-6 my-3">
                    <h1 className="text-center mb-4">
                         Top Headlines: {this.props.category === "general" ? "Today" : this.capitalize(this.props.category)}
                    </h1>
                    {this.state.loading && <Loader />}
                    {!this.state.loading && (
                         <div className="row">
                              {this.state.articles.map((element) => {
                                   return (
                                        <div className="col-md-4" key={element.url}>
                                             <NewsItems
                                                  title={element.title}
                                                  description={element.description}
                                                  imageURL={
                                                       element.urlToImage
                                                            ? element.urlToImage
                                                            : "https://plus.unsplash.com/premium_photo-1661776217775-ba332ee9566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                                  }
                                                  newsURL={element.url}
                                                  author={element.author}
                                                  onDate={element.publishedAt}
                                                  source={element.source.name}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    )}
                    <div className="container d-flex justify-content-between">
                         <button
                              disabled={this.state.page <= 1}
                              onClick={this.handlePrevClick}
                              type="button"
                              className="btn btn-dark"
                         >
                              &larr; Prev
                         </button>
                         <button onClick={this.handleNextClick} type="button" className="btn btn-dark">
                              Next &rarr;
                         </button>
                    </div>
               </div>
          );
     }
}
