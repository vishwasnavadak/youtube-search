import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import YoutubeSearch from "./YoutubeSearch";

afterEach(cleanup);
const state = { videos: [], keyword: "", pageToken: null };
describe("YoutubeSearch Test Suit", () => {
  it("checks initial render", () => {
    const { container } = render(<YoutubeSearch state={state} />);
    expect(
      container.getElementsByTagName("p")[0].getAttribute("class")
    ).toEqual("results");
  });
  it("checks render if keyword is given", () => {
    const { getByPlaceholderText, container } = render(
      <YoutubeSearch state={state} />
    );
    const searchBar = getByPlaceholderText("Type to Search");
    fireEvent.change(searchBar, { target: { value: "react js" } });
    expect(
      container.getElementsByTagName("div")[0].getAttribute("class")
    ).toEqual("results");
  });
});
