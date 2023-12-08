import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox,CheckboxLabelsPlacement } from "./Checkbox";
export default {
title: "Input/Checkbox",
component: Checkbox,
argTypes: {
size: {
options: ["small", "medium", "large"],
control: { type: "radio" },
},
color: {
options: [
"primary",
"success",
"secondary",
"error",
"info",
"success",
"warning",
],
control: { type: "radio" },
},
onClick: { action: "check" },
},
parameters: {
docs: {
description: {
component:
"Checkboxes allow the user to select one or more items from a set.",
},
},
},
tags: ['autodocs'],
};
const CheckboxDefaultTemplate = (args) => {
return (
<FormGroup>
<FormControlLabel
control={<Checkbox {...args} />}
label="Checkbox Label"
></FormControlLabel>
</FormGroup>
);
};
export const CheckBoxPlayground = CheckboxDefaultTemplate.bind({});
CheckBoxPlayground.args = {
size: "medium",
disabled: false,
color: "primary",
};
const HowToConsumeComponent = (props) => (
<div>
<code>
This is how to consume the AGCP-UI Checkbox component ,just pass in the
props when using the component .
</code>
<br />
<br />
<code>import {"{Checkbox}"} from "@arisglobal/agcp-ui" ;</code>
<br />
<code>&lt;Checkbox&gt;&lt;/Checkbox&gt;</code>
</div>
);
const TemplateDiscription = (args) => (
<HowToConsumeComponent {...args}></HowToConsumeComponent>
);
export const HowToConsumeCheckboxComponents = TemplateDiscription.bind({});
HowToConsumeCheckboxComponents.parameters = {
docs: {
source: {
code: null,
language: "html",
},
},
};
const OverviewDescription = () => {
return (
<div>
<div class="css-14m39zm p.sbdocs">
Checkboxes can be used to turn an option on or off. If you have multiple
options appearing in a list, you can preserve space by using checkboxes
instead of on/off switches. If you have a single option, avoid using a
checkbox and use an on/off switch instead.
</div>
</div>
);
};
export const Overview = OverviewDescription.bind({});
Overview.parameters = { docs: { source: { code: null } } };
export const CheckboxLabelsPlacements = CheckboxLabelsPlacement.bind({});
CheckboxLabelsPlacements.parameters = {
docs: {
source: {
code: `<FormControl component="fieldset">
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
</FormControl>`,
language: "html",
},
},
};
