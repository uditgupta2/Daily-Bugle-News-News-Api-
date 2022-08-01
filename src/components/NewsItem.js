import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              (imageUrl = null
                ? "https://images.hindustantimes.com/tech/img/2022/07/28/1600x900/jpegPIA25017_(1)_1658994714280_1659008302741_1659008302741.jpg"
                : imageUrl)
            }
            className="card-img-top"
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge badge-light">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author == null ? "unknown" : author} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
