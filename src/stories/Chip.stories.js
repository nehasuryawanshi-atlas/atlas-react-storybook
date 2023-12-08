import { Chip } from "./Chip";
export default {
  title: "Data Display/Chip",
  component: Chip,
  argTypes: {
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Chips are compact elements that represent an input, attribute, or 
    action.`,
      },
    },
  },
  tags: ["autodocs"],
};
const Template = (args) => {
  return <Chip {...args}></Chip>;
};
export const ChipsBasic = Template.bind({});
ChipsBasic.args = {
  label: "Chip",
  variant: "outlined",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
};
