import React, { Component } from "react";
import YTSearch from "./YTSearch";

import SearchResults from "./SearchResults";

const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";

export default class YoutubeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      keyword: "",
      pageToken: null
    };
  }
  componentDidMount() {
    this.delay = null;
  }
  fetchVideos = () => {
    YTSearch(
      {
        key: API_KEY,
        term: this.state.keyword,
        pageToken: this.state.pageToken
      },
      data => {
        this.setState({
          videos: [...this.state.videos, ...data.items],
          pageToken: data.nextPageToken
        });
      }
    );
  };
  handleScroll = () => {
    if (this.state.pageToken !== null) {
      this.fetchVideos();
      console.log("loading more videos");
    } else {
      console.log("cannot load more videos");
    }
  };
  handleInput = e => {
    clearTimeout(this.delay);
    let keyword = e.target.value;
    this.setState({ keyword: keyword });
    if (keyword !== "") {
      this.delay = setTimeout(() => {
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
