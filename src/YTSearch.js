import { get } from "axios";

var ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

export default function(options, callback) {
  if (!options.key) {
    throw new Error("Youtube Search expected key, received undefined");
  }

  var params = {
    part: "snippet",
    key: options.key,
    q: options.term,
    type: "video",
    pageToken: options.pageToken
  };

  get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}
