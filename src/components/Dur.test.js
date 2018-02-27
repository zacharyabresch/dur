import React from "react";
import { shallow } from "enzyme";

import Dur from "./Dur";

describe("Dur", () => {
  const dur = shallow(<Dur />);
  it("renders correctly", () => {
    expect(dur).toMatchSnapshot();
  });

  it("contains a start input", () => {
    expect(dur.find(".start-input").length).toEqual(1);
  });
  it("contains an end input", () => {
    expect(dur.find(".end-input").length).toEqual(1);
  });
  it("contains a button to calculate", () => {
    expect(dur.find(".calculate-btn").length).toEqual(1);
  });
});
