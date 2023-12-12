import {
  Tooltip,
  TooltipsPositioned,
  TooltipsArrow,
  TooltipsTrigger,
  TooltipsControlled,
  TooltipsTransition,
  TooltipsFollowCursor,
} from "./Tooltip";
import { IconButton } from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
      control: { type: "radio" },
    },
    arrow: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: `Tooltips display informative text when users hover over, 
    focus on, or tap an element.`,
      },
    },
  },
  tags: ["autodocs"],
};
const TooltipsBasicComponent = (args) => {
  const { icon } = args;
  return (
    <Tooltip {...args}>
      <IconButton>{icon}</IconButton>
    </Tooltip>
  );
};
export const TooltipBasic = TooltipsBasicComponent.bind({});
TooltipBasic.args = {
  title: "Information tooltip ",
  icon: <InfoOutlined />,
};
TooltipBasic.parameters = {
  docs: {
    source: {
      code: `<Tooltip
    title="Information tooltip"
    >
    <InfoOutlined />
    </Tooltip>`,
      language: "html",
    },
  },
};

const TooltipsDescription = () => {
  return (
    <div>
      <div className="css-14m39zm p.sbdocs">
        A tooltip is a message box that is displayed when a user hovers over or
        gives focus to a UI element. The tool tip should be paired with an
        interactive UI element like a button. Tooltips should be used sparingly
        and contain succinct, supplementary information.
      </div>
    </div>
  );
};
export const Overview = TooltipsDescription.bind({});
Overview.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
const TooltipsPositionedComponent = (args) => TooltipsPositioned(args);
export const TooltipPositioned = TooltipsPositionedComponent.bind({});
TooltipPositioned.parameters = {
  docs: {
    source: {
      code: ` <Box>
    <Grid container justifyContent="center">
    <Grid item>
    <Tooltip title="Add" placement="top-start">
    <Button>top-start</Button>
    </Tooltip>
    <Tooltip title="Add" placement="top">
    <Button>top</Button>
    </Tooltip>
    <Tooltip title="Add" placement="top-end">
    <Button>top-end</Button>
    </Tooltip>
    </Grid>
    </Grid>
    <Grid container justifyContent="center">
    <Grid item xs={6}>
    <Tooltip title="Add" placement="left-start">
    <Button>left-start</Button>
    </Tooltip>
    <br />
    <Tooltip title="Add" placement="left">
    <Button>left</Button>
    </Tooltip>
    <br />
    <Tooltip title="Add" placement="left-end">
    <Button>left-end</Button>
    </Tooltip>
    </Grid>
    <Grid item container xs={6} alignItems="flex-end" direction="column">
    <Grid item>
    <Tooltip title="Add" placement="right-start">
    <Button>right-start</Button>
    </Tooltip>
    </Grid>
    <Grid item>
    <Tooltip title="Add" placement="right">
    <Button>right</Button>
    </Tooltip>
    </Grid>
    <Grid item>
    <Tooltip title="Add" placement="right-end">
    <Button>right-end</Button>
    </Tooltip>
    </Grid>
    </Grid>
    </Grid>
    <Grid container justifyContent="center">
    <Grid item>
    <Tooltip title="Add" placement="bottom-start">
    <Button>bottom-start</Button>
    </Tooltip>
    <Tooltip title="Add" placement="bottom">
    <Button>bottom</Button>
    </Tooltip>
    <Tooltip title="Add" placement="bottom-end">
    <Button>bottom-end</Button>
    </Tooltip>
    </Grid>
    </Grid>
    </Box>`,
      language: "html",
    },
  },
};
const TooltipsArrowComponent = (args) => TooltipsArrow(args);
export const TooltipArrow = TooltipsArrowComponent.bind({});
TooltipArrow.parameters = {
  docs: {
    source: {
      code: `<Tooltip title="Add" arrow>
    <Button>Arrow</Button>
    </Tooltip>`,
      language: "react",
      type: "JSX",
    },
  },
};
const TooltipsTriggerComponent = (args) => TooltipsTrigger(args);
export const TooltipTrigger = TooltipsTriggerComponent.bind({});
TooltipTrigger.parameters = {
  docs: {
    source: {
      code: `const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
    setOpen(false);
    };
    const handleTooltipOpen = () => {
    setOpen(true);
    };
    <div>
    <Grid container justifyContent="center">
    <Grid item>
    <Tooltip disableFocusListener title="Add">
    <Button>Hover or touch</Button>
    </Tooltip>
    </Grid>
    <Grid item>
    <Tooltip disableHoverListener title="Add">
    <Button>Focus or touch</Button>
    </Tooltip>
    </Grid>
    <Grid item>
    <Tooltip disableFocusListener disableTouchListener title="Add">
    <Button>Hover</Button>
    </Tooltip>
    </Grid>
    <Grid item>
    <ClickAwayListener onClickAway={handleTooltipClose}>
    <div>
    <Tooltip
    PopperProps={{
    disablePortal: true,
    }}
    onClose={handleTooltipClose}
    open={open}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    title="Add"
    >
    <Button onClick={handleTooltipOpen}>Click</Button>
    </Tooltip>
    </div>
    </ClickAwayListener>
    </Grid>
    </Grid>
    </div>`,
      language: "html",
    },
  },
};
const TooltipsControlledComponent = (args) => TooltipsControlled(args);
export const TooltipControlled = TooltipsControlledComponent.bind({});
TooltipControlled.parameters = {
  docs: {
    source: {
      code: `
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
    setOpen(false);
    };
    const handleOpen = () => {
    setOpen(true);
    };
    <Tooltip
    open={open}
    onClose={handleClose}
    onOpen={handleOpen}
    title="Add"
    >
    <Button>Controlled</Button>
    </Tooltip>>`,
      language: "html",
    },
  },
};
const TooltipsTransitionComponent = (args) => TooltipsTransition(args);
export const TooltipTransition = TooltipsTransitionComponent.bind({});
TooltipTransition.parameters = {
  docs: {
    source: {
      code: `<div>
    <Tooltip title="Add">
    <Button>Grow</Button>
    </Tooltip>
    <Tooltip
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title="Add"
    >
    <Button>Fade</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Zoom} title="Add">
    <Button>Zoom</Button>
    </Tooltip>
    </div>`,
      language: "html",
    },
  },
};
const TooltipsFollowCursorComponent = (args) => TooltipsFollowCursor(args);
export const TooltipFollowCursor = TooltipsFollowCursorComponent.bind({});
TooltipFollowCursor.parameters = {
  docs: {
    source: {
      code: `<Tooltip title="You don't have permission to do this" followCursor>
    <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
    Disabled Action
    </Box>
    </Tooltip>`,
      language: "html",
    },
  },
};
