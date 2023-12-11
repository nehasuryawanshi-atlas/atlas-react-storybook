import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "./Toggle";

export default {
  title: "Input/Toggle Button",
  component: ToggleButton,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    onClick: { action: "check" },
  },
  parameters: {
    docs: {
      description: {
        component: `Toggle buttons can be used to group related options. It helps 
to select one or more from the group of options.`,
      },
    },
  },
};
const ToggleButtonGroupDefaultTemplate = (args) => {
  const { ToggleButtonGroupArray, ...realArgs } = args;
  const [alignment, setAligment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAligment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      {...realArgs}
    >
      {ToggleButtonGroupArray.map((item, index) => {
        return (
          <ToggleButton value={item.toggleButtonValue} key={index}>
            {item.toggleButtonLabel}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
export const ToggleButtonGroupPlayground =
  ToggleButtonGroupDefaultTemplate.bind({});
ToggleButtonGroupPlayground.args = {
  size: "medium",
  color: "primary",
  fullWidth: false,
  disabled: false,
  ToggleButtonGroupArray: [
    {
      toggleButtonValue: "toggle1",
      toggleButtonLabel: "Toggle1",
    },
    {
      toggleButtonValue: "toggle2",
      toggleButtonLabel: "Toggle2 ",
    },
    {
      toggleButtonValue: "toggle3",
      toggleButtonLabel: "Toggle3 ",
    }
  ],
};
