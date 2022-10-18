import { render } from "@testing-library/react";
import React, { useState } from "react";

const BoroughInfo = ({ selectedBorough }) => {
  return <p>{selectedBorough}</p>;
};

export default BoroughInfo;
