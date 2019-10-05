import React from "react";
import { render, cleanup } from "@testing-library/react";
import ResultItem from "./ResultItem";

afterEach(cleanup);

describe("Result Item Test Suit", () => {
  //Mock Data
  const video = {
    kind: "youtube#searchResult",
    etag: '"p4VTdlkQv3HQeTEaXgvLePAydmU/JQhBJm4GYMROMviAK2b85-BbNgc"',
    id: {
      kind: "youtube#video",
      videoId: "nvHeB32ICDM"
    },
    snippet: {
      publishedAt: "2019-08-22T12:26:25.000Z",
      channelId: "UCXgGY0wkgOzynnHvSEVmE3A",
      title: "ReactJS Crash Course",
      description:
        "Welcome to the crash course on reactJS. Here is the link for exercise files, final project, and discussion section for this course: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nvHeB32ICDM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/nvHeB32ICDM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/nvHeB32ICDM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      channelTitle: "Hitesh Choudhary",
      liveBroadcastContent: "none"
    }
  };

  it("loads video thumbnail", () => {
    const { container } = render(<ResultItem video={video} />);
    expect(container.getElementsByTagName("img")).toHaveLength(1);
  });
  it("image alt text", () => {
    const { container } = render(<ResultItem video={video} />);
    expect(
      container.getElementsByTagName("img")[0].getAttribute("alt")
    ).toBeTruthy();
  });
});
