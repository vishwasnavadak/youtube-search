import React from "react";

const ResultItem = props => {
  const { video } = props;
  let { thumbnails } = video.snippet;

  return (
    <div className="result-item">
      <img
        className="video-thumbnail"
        src={thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h4 className="video-title">
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="blank"
        >
          {video.snippet.title}
        </a>
      </h4>
    </div>
  );
};

export default ResultItem;
