import React from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Tooltip as TooltipMUI } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { Fade } from "@mui/material";
import { Zoom } from "@mui/material";
export const Tooltip = (props) => {
  return <TooltipMUI {...props}>{props.children}</TooltipMUI>;
};
Tooltip.propTypes = {
  title: PropTypes.node,
  children: PropTypes.any,
  arrow: PropTypes.func,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  TransitionComponent: PropTypes.element,
  TransitionProps: PropTypes.object,
  PopperProps: PropTypes.object,
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  enterTouchDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  leaveTouchDelay: PropTypes.number,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  followCursor: PropTypes.bool,
  disableFocusListener: PropTypes.bool,
  disableHoverListener: PropTypes.bool,
  disableInteractive: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
  placement: PropTypes.oneOf([
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
  ]),
};
export const TooltipsPositioned = ({ placement }) => {
  return (
    <Box>
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
    </Box>
  );
};
export const TooltipsArrow = ({ arrow }) => {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
};
export const TooltipsTrigger = ({
  disableFocusListener,
  disableTouchListener,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
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
    </div>
  );
};
export const TooltipsControlled = ({ onClose, onOpen }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>Controlled</Button>
    </Tooltip>
  );
};
export const TooltipsTransition = ({
  TransitionComponent,
  TransitionProps,
}) => {
  return (
    <div>
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
    </div>
  );
};
export const TooltipsFollowCursor = ({ followCursor }) => {
  return (
    <Tooltip title="You don't have permission to do this" followCursor>
      <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
        Disabled Action
      </Box>
    </Tooltip>
  );
};
