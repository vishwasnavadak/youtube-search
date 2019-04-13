import React, { Component } from "react";
import YTSearch from "youtube-api-search";

import SearchResults from "./SearchResults";

const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";

export default class YoutubeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      keyword: "",
      maxResults: 5
    };
    this.handleInput = this.handleInput.bind(this);
  }

  fetchVideos = () => {
    YTSearch(
      {
        key: API_KEY,
        term: this.state.keyword,
        maxResults: this.state.maxResults
      },
      videos => {
        //   console.log("TCL: YoutubeSearch -> fetchVideos -> videos", videos);
        this.setState({ videos: videos });
      }
    );
  };
  handleScroll = () => {
    if (this.state.maxResults <= 45) {
      this.setState({ maxResults: this.state.maxResults + 5 });
      this.fetchVideos();
      console.log("loading more videos");
    } else {
      console.log("cannot load more videos");
    }
  };
  handleInput = e => {
    let keyword = e.target.value;
    this.setState({ keyword: keyword });
    if (keyword !== "") {
      setTimeout(() => {
        this.fetchVideos();
      }, 1000);
    }
  };
  render() {
    let results = <p className="results">Videos will come here</p>;
    if (this.state.keyword.trim() !== "") {
      results = (
        <SearchResults
          videos={this.state.videos}
          getMoreVideos={this.handleScroll}
        />
      );
    }
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          value={this.state.keyword}
          onChange={this.handleInput}
          placeholder="Type to Search"
        />
        {results}
      </div>
    );
  }
}
