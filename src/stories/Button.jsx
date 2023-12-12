import { Delete, Send } from "@mui/icons-material";
import { LoadingButton as LoadingButtonMUI } from "@mui/lab";
import {
Box,
Button as ButtonMUI,
FormGroup,
Stack,
} from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";
export const Button = (props) => {
return (

<ButtonMUI {...props}>{props.children}</ButtonMUI>
);
};
export const LoadingButton = (props) => {
return (
<LoadingButtonMUI {...props}>{props.children}</LoadingButtonMUI>
);
};
Button.propTypes = {
children: PropTypes.any,
onClick: PropTypes.func,
disabled: PropTypes.bool,
size: PropTypes.oneOf(["small", "medium", "large"]),
variant: PropTypes.oneOf(["contained", "outlined", "text"]),
color: PropTypes.oneOf([
"primary",
"success",
"secondary",
"error",
"info",
"warning",
]),
startIcon: PropTypes.any,
endIcon: PropTypes.any
};
LoadingButton.propTypes = {
loading: PropTypes.bool,
...Button.propTypes,
};
export const ButtonBasics = (props) => {
return (
<Stack spacing={2} direction={props.direction}>
<Button variant="text" size={props.size} color={props.color}>
Text
</Button>
<Button variant="contained" size={props.size} color={props.color}>
Contained
</Button>
<Button variant="outlined" size={props.size} color={props.color}>
Outlined
</Button>
<Button
variant="contained"
size={props.size}
color={props.color}
disabled
>
Disabled
</Button>
<Button
variant="contained"
size={props.size}
color={props.color}
href="#contained-buttons"
>
Link
</Button>
</Stack>
);
};
export const ButtonColors = ({ color }) => {
return (
<Stack direction="row" spacing={2}>
<Button color="primary" variant="contained">
primary
</Button>
<Button color="secondary" variant="contained">
Secondary
</Button>
<Button variant="contained" color="success">
Success
</Button>
<Button variant="outlined" color="error">
Error
</Button>
<Button variant="outlined" color="info">
Info
</Button>
<Button variant="outlined" color="warning">
Warning
</Button>
</Stack>
);
};
export const ButtonSizes = ({ size }) => {
return (
<Box sx={{ "& button": { m: 1 } }}>
<div>
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
</div>
<div>
<Button variant="outlined" size="small">
Small
</Button>
<Button variant="outlined" size="medium">
Medium
</Button>
<Button variant="outlined" size="large">
Large
</Button>
</div>
<div>
<Button variant="contained" size="small">
Small
</Button>
<Button variant="contained" size="medium">
Medium
</Button>
<Button variant="contained" size="large">
Large
</Button>
</div>
</Box>
);
};
export const ButtonHandlingClick = (props) => {
const { label, ...otherProps } = props;
return (
<Button
{...otherProps}
onClick={() => {
alert("clicked");
}}
>
{label}
</Button>
);
};
export const ButtonIconLabelButton = ({ startIcon, endIcon }) => {
return (
<FormGroup>
<Stack direction="row" spacing={2} mb="12px">
<Button variant="outlined" color="primary" startIcon={<Delete />}>
Delete
</Button>
<Button variant="contained" color="primary" endIcon={<Send />}>
Send
</Button>
</Stack>
</FormGroup>
);
};
export const ButtonLoadings = (props) => {
return (
<Stack direction="row" spacing={2} mb="12px">
<LoadingButton {...props}>{props.children}</LoadingButton>
</Stack>
);
};