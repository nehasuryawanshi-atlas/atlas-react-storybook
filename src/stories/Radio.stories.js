import { FormControlLabel } from "@mui/material";
import { Radio, RadioGroup, RadioButtonLabelPlacements } from "./Radio";
export default {
  title: "Input/Radio Buttons",
  Component: RadioGroup,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
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
    onClick: {
      action: "checked",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Radio buttons allow the user to select one option from a set. ",
      },
    },
  },
  tags: ["autodocs"],
};
const RadioButtonDefaultTemplate = (args) => {
  return (
    <RadioGroup>
      <FormControlLabel
        control={<Radio {...args} />}
        label="Radio button Label"
      ></FormControlLabel>
    </RadioGroup>
  );
};
export const RadioPlayground = RadioButtonDefaultTemplate.bind({});
RadioPlayground.args = {
  size: "medium",
  disabled: false,
  color: "primary",
};

const OverviewDescription = () => {
  return (
    <div>
      <div>
        Radio buttons are used for mutually exclusive choices, not for multiple
        choices. Only one radio button can be selected at a time. When a user
        chooses a new item, the previous choice is automatically deselected.
        Radio buttons should have the most commonly used option selected by
        default.
      </div>
    </div>
  );
};
export const Overview = OverviewDescription.bind({});
Overview.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
export const RadioButtonLabelPlacement = RadioButtonLabelPlacements.bind({});
RadioButtonLabelPlacement.parameters = {
  docs: {
    source: {
      code: `<FormControl>
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
</FormControl>`,
      language: "html",
    },
  },
};
