/* eslint-env jest */

import React from "react";
import { render, cleanup } from "react-testing-library";
import Divider from "../Divider";

beforeEach(cleanup);

test("Renders divider with both black and green text", () => {
  const { getByText, getByTestId } = render(
    <Divider blackText={"CHECK OUT"} greenText={"LATEST LOTTO RESULTS"} />
  );

  getByText("CHECK OUT");
  getByText("LATEST LOTTO RESULTS");
  getByTestId("divider-image");
});

test("Renders divider with only black text", () => {
  const { getByText, getByTestId } = render(
    <Divider blackText={"CHECK OUT"} />
  );

  getByText("CHECK OUT");
  getByTestId("divider-image");
});

test("Renders divider with only green text", () => {
  const { getByText, getByTestId } = render(
    <Divider greenText={"LATEST LOTTO RESULTS"} />
  );

  getByText("LATEST LOTTO RESULTS");
  getByTestId("divider-image");
});
