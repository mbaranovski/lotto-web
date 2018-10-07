/* eslint-env jest */

import React from "react";
import { render, cleanup } from "react-testing-library";
import Header from "../Header";

beforeEach(cleanup);

test("Checks if Header component renders correctly", () => {
  const { getByText, getByTestId } = render(<Header />);

  getByText("Home of Lotto Betting");
  getByText("Join");
  getByTestId("header-logo");
});
