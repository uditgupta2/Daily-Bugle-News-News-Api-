import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c97991e55e3e4901b3ba670b6bfcc5d6&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  // PREVIOUS PAGE BUTTON
  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c97991e55e3e4901b3ba670b6bfcc5d6&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  // NEXT PAGE BUTTON
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c97991e55e3e4901b3ba670b6bfcc5d6&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    }
  };

  // RENDER
  render() {
    return (
      <div className="container my-3">
        <h1>Daily Bugle top headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={
                    element.description != null ? element.description : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-sm btn-outline-info "
            onClick={this.handlePreviousClick}
          >
            &laquo; Previous Page
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-info mx-2"
            onClick={this.handleNextClick}
          >
            Next Page &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
