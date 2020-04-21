import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./style.css";
function FormInput({
  placeholder,
  right,
  left,
  dropDown,
  values,
  all,
  stretched,
  small,
  password,
}) {
  const [value, setValue] = useState("");
  let style = (right && "right") || (left && "left") || "";

  if (dropDown) {
    return (
      <div
        className={`${stretched ? "strech-dropDown" : ""} input-with-dropdown`}
      >
        <div
          className={`drop-down-container ${
            left && !all ? "left-drop-down" : "right-drop-down"
          } ${all ? "left-drop-down right-drop-down" : ""}`}
        >
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={value || placeholder}
              onChange={(e) => setValue(e.target.value)}
            >
              {values.map((item, idx) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  } else if (password) {
    return (
      <input
        className={`form-input ${style} ${small ? "small-input" : ""}`}
        placeholder={placeholder}
        type="password"
      />
    );
  } else {
    return (
      <input
        className={`form-input ${style} ${small ? "small-input" : ""}`}
        placeholder={placeholder}
        type="text"
      />
    );
  }
}

export default FormInput;
