import React from "react";
import { PropTypes } from "prop-types";
import {
  FormControlLabel,
  FormControl,
  Radio as RadioMUI,
  RadioGroup as RadioGroupMUI,
} from "@mui/material";

export const RadioGroup = (props) => {
  return <RadioGroupMUI {...props}>{props.children}</RadioGroupMUI>;
};
RadioGroup.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  row: PropTypes.bool,
  name: PropTypes.string,
};
export const Radio = (props) => {
  return <RadioMUI {...props} />;
};
export const RadioButtonLabelPlacements = ({ onClick, disabled, ...props }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio onClick={onClick} disabled={disabled} {...props} />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio disabled={disabled} {...props} />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio disabled={disabled} {...props} />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Radio disabled={disabled} {...props} />}
          label="End"
        />
      </RadioGroup>
    </FormControl>
  );
};
RadioButtonLabelPlacements.args = {
  disabled: false,
};
