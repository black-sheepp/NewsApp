import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from 'prop-types'


export default class News extends Component {
     static defaultProps = {
          country: "in",
          pageSize: 9,
          category: "general",
     };
     PropTypes = {
          country: PropTypes.string,
          pageSize: PropTypes.number,
          category: PropTypes.string,
     };

     constructor() {
          super();
          this.state = {
               articles: [],
               loading: false,
               page: 1,
          };
     }

     async componentDidMount() {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be082017bae842fc877e1798503d251f&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true });
          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);
          this.setState({ articles: parseData.articles, loading: false });
     }

     handleNextClick = async () => {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
               this.props.category
          }&apiKey=be082017bae842fc877e1798503d251f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true });
          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);

          this.setState({
               page: this.state.page + 1,
               articles: parseData.articles,
               loading: false,
          });
     };
     handlePrevClick = async () => {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
               this.props.category
          }&apiKey=be082017bae842fc877e1798503d251f
          &page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true });
          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);

          this.setState({
               page: this.state.page - 1,
               articles: parseData.articles,
               loading: false,
          });
     };

     capitalize(word){
          let x = word.slice(1);
          return word.charAt(0).toUpperCase() + x
     }

     render() {
          return (
               <div className="container mx-6 my-3">
                    <h1 className="text-center">Headlines: {(this.props.category==="general")?"Today":this.capitalize(this.props.category)}</h1>
                    {this.state.loading && <Loader />}
                    {!this.state.loading && (
                         <div className="row">
                              {this.state.articles.map((element) => {
                                   return (
                                        <div className="col-md-4" key={element.url}>
                                             <NewsItems
                                                  title={element.title}
                                                  description={element.description}
                                                  imageURL={element.urlToImage}
                                                  newsURL={element.url}
                                                  author={element.author}
                                                  onDate={element.publishedAt}
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
