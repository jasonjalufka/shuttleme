import React from "react";
import Select from "react-select";

const options = [
  { value: "txstate", label: "Texas State University" },
  { value: "uc", label: "University of Chicago" },
  { value: "utep", label: "University of Texas at El Paso" }
];

const Dropdown = props => <Select label="University" options={options} />;

export default Dropdown;
