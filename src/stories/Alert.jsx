import { AlertTitle as AlertTitleMUI } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
export const AlertRef = (props, ref) => {
  return (
    <MuiAlert ref={ref} {...props}>
      {props.children}
    </MuiAlert>
  );
};
export const AlertTitle = (props) => {
  return <AlertTitleMUI {...props}>{props.children}</AlertTitleMUI>;
};
export const Alert = React.forwardRef(AlertRef);
