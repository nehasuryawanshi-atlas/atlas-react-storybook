import React from "react";
import { PropTypes } from "prop-types";
import {
Checkbox as CheckboxMUI,
FormControlLabel,
FormGroup,
FormControl,
FormLabel,
} from "@mui/material";
export const Checkbox = (props) => {
return (

<CheckboxMUI {...props} />

);
};
Checkbox.prototype = {
label: PropTypes.string,
id: PropTypes.string,
checked: PropTypes.bool,
required: PropTypes.bool,
onChange: PropTypes.func,
onClick: PropTypes.func,
selected: PropTypes.bool,
disabled: PropTypes.bool,
};
export const CheckboxLabelsPlacement = (props) => {
return (

<FormControl component="fieldset">
<FormLabel component="legend">Label placement</FormLabel>
<FormGroup aria-label="position" row>
<FormControlLabel
value="top"
control={<Checkbox />}
label="Top"
labelPlacement="top"
/>
<FormControlLabel
value="start"
control={<Checkbox />}
label="Start"
labelPlacement="start"
/>
<FormControlLabel
value="bottom"
control={<Checkbox />}
label="Bottom"
labelPlacement="bottom"
/>
<FormControlLabel
value="end"
control={<Checkbox />}
label="End"
labelPlacement="end"
/>
</FormGroup>
</FormControl>

);
};