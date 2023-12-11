import * as React from "react";
import { PropTypes } from "prop-types";
import {
  ToggleButton as ToggleButtonMUI,
  ToggleButtonGroup as ToggleButtonGroupMUI,
} from "@mui/material";

export const ToggleButtonGroup = (props) => {
  return (
    <ToggleButtonGroupMUI {...props}>{props.children}</ToggleButtonGroupMUI>
  );
};
ToggleButtonGroup.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  exclusive: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  value: PropTypes.any,
};
export const ToggleButton = (props) => {
  return <ToggleButtonMUI {...props}>{props.children}</ToggleButtonMUI>;
};
