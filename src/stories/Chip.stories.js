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
const HowToConsumeComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Chip component ,just pass in the props
      when using the component .
    </code>
    <br />
    <br />
    <code>import {"{Chip}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;Chip&gt;&lt;/Chip&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeComponent {...args}></HowToConsumeComponent>
);
export const HowToConsumeChipComponents = TemplateDiscription.bind({});
HowToConsumeChipComponents.parameters = {
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
        Chips allow users to enter information, make selections, filter content,
        or trigger actions. While included here as a standalone component, the
        most common use will be in some form of input.
      </div>
    </div>
  );
};
export const Overview = OverviewDescription.bind({});
Overview.parameters = { docs: { source: { code: null } } };
