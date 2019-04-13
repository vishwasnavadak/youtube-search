import React, { Component } from "react";

import ResultItem from "./ResultItem";

export default class SearchResults extends Component {
  //https://stackoverflow.com/questions/45585542/detecting-when-user-scrolls-to-bottom-of-div-with-react-js/49573628
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    console.log("Scroll Event Added");
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
    console.log("Scroll Event Removed");
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("root");
    if (this.isBottom(wrappedElement)) {
      console.log("page bottom reached");
      this.props.getMoreVideos();
    }
  };
  render() {
    return (
      <div className="results">
        {this.props.videos.map(video => {
          return <ResultItem video={video} key={video.etag} />;
        })}
      </div>
    );
  }
}
