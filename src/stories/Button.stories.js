import {
  Alarm,
  Delete,
  Save,
  Refresh,
  Home,
  Menu,
  Notifications,
  SearchIcon
  } from "@mui/icons-material";
  import {
  Button,
  ButtonBasics,
  ButtonColors,
  ButtonHandlingClick,
  ButtonIconLabelButton,
  ButtonLoadings,
  ButtonSizes,
  } from "./Button";

 
  const iconOptions = [
  "none",
  "delete",
  "alarm",
  "home",
  "menu",
  "save",
  "search",
  "refresh",
  "notification",
  ];
  const iconMapping = {
  delete: <Delete></Delete>,
  save: <Save></Save>,
  refresh: <Refresh></Refresh>,
  home: <Home></Home>,
  menu: <Menu></Menu>,
  alarm: <Alarm></Alarm>,
  search: <SearchIcon></SearchIcon>,
  notification: <Notifications></Notifications>,
  none: null,
  };
  export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
  variant: {
  options: ["contained", "outlined", "text"],
  control: { type: "radio" },
  },
  size: {
  options: ["small", "medium", "large"],
  control: { type: "radio" },
  },
  color: {
  options: ["primary", "success", "secondary", "error", "info", "warning"],
  control: { type: "radio" },
  },
  direction: {
  options: ["row", "row-reverse", "column", "column-reverse"],
  control: { type: "radio" },
  },
  handleClick: { action: "Clicked" },
  startIcon: {
  options: iconOptions,
  control: { type: "select" },
  mapping: iconMapping,
  },
  endIcon: {
  options: iconOptions,
  control: { type: "select" },
  mapping: iconMapping,
  },
  },
  parameters: {
  docs: {
  description: {
  component: "Buttons are used to initialize an action. Button labels   express what action will occur when the user interacts with it.",
  },
  },
  },
  tags: ["autodocs"],
  };
  const ButtonDefaultTemplate = (args) => {
  const { label, ...argsList } = args;
  return <Button {...argsList}>{label}</Button>;
  };
  export const ButtonPlayground = ButtonDefaultTemplate.bind({});
  ButtonPlayground.parameters = {
  controls: { exclude: ["direction", "children", "handleClick"] },
  };
  ButtonPlayground.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  disabled: false
  };
 
  const OverviewDescription = () => {
  return (
  <div class="css-14m39zm p.sbdocs">
  Buttons are clickable elements that are used to trigger actions. They 
  communicate calls to action to the user and allow users to interact with pages in 
  a variety of ways. Button labels express what action will occur when the user 
  interacts with it.
  <h3>When to Use</h3>
  <div>Use buttons to communicate actions users can take and to allow users 
  to interact with the page. Each page should have only one primary button, and any 
  remaining calls to action should be represented as lower emphasis buttons.</div>
  <h3>When Not to Use</h3>
  <div>Do not use buttons as navigational elements. Instead, use links when 
  the desired action is to take the user to a new page.</div>
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
  export const ButtonVariants = ButtonBasics.bind({});
  ButtonVariants.parameters = {
  controls: { include: ["color", "size", "direction"] },
  };
  ButtonVariants.args = {
  label: "Button",
  color: "primary",
  size: "medium",
  direction: "row"
  };
  export const ButtonHandlingClicks = ButtonHandlingClick.bind({});
  ButtonHandlingClicks.parameters = {
  controls: { include: ["label", "color", "size", "variant", "startIcon", 
  "endIcon"] },
  };
  ButtonHandlingClicks.args = {
  label: "Click me",
  color: "primary",
  size: "medium"
  };
  export const ButtonColor = ButtonColors.bind({});
  ButtonColor.parameters = {
  controls: { include: ["color", "size", "direction"] },
  };
  ButtonColor.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  direction: "row"
  };
  export const ButtonSize = ButtonSizes.bind({});
  export const ButtonIconLabelButtons = ButtonIconLabelButton.bind({});
  ButtonIconLabelButtons.parameters = {
  docs: {
  source: {
  code: `<FormGroup>
  <Stack
  direction="row"
  mb="12px"
  spacing={2}
  >
  <Button
  color="primary"
  startIcon={<DeleteIcon />}
  variant="outlined"
  >
  Delete
  </Button>
  <Button
  color="primary"
  endIcon={<SendIcon />}
  variant="contained"
  >
  Send
  </Button>
  </Stack>
  </FormGroup>`,
  language: "html",
  },
  },
  };
  export const ButtonLoading = ButtonLoadings.bind({});
  ButtonLoading.args = {
  children: "Submit",
  variant: "outlined",
  loading: true,
  };
  