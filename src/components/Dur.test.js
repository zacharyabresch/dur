import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

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

  it("has the initialState", () => {
    const initialState = {
      startDate: moment().format("L"),
      endDate: moment()
        .add(1, "days")
        .format("L")
    };
    expect(dur.state()).toEqual(initialState);
  });

  describe("when typing into the `start-input`", () => {
    beforeEach(() => {
      dur
        .find(".start-input")
        .simulate("change", { target: { value: "01/01/2018" } });
    });
    it("sets the `startDate` in the `state`", () => {
      expect(dur.state().startDate).toEqual("01/01/2018");
    });
  });

  describe("when typing into the `end-input`", () => {
    beforeEach(() => {
      dur
        .find(".end-input")
        .simulate("change", { target: { value: "01/02/2018" } });
    });
    it("sets the `endDate` in the `state`", () => {
      expect(dur.state().endDate).toEqual("01/02/2018");
    });
  });
});
