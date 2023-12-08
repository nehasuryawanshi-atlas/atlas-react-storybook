import { Alert,AlertTitle } from "./Alert";
import { Button } from "@mui/material";
export default {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: {
    actionButtonLabel: "UNDO",
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    severity: {
      options: ["success", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClose: { action: "Closed" },
    children: [],
  },
  parameters: {
    backgrounds: {
      default: "Light Theme",
      values: [{ name: "Dark Theme", value: "#656B73" }],
    },
    
    docs: {
      description: {
        component: `An alert displays a short, important message in a way that 
attracts the user's attention without interrupting the user's task.`,
      },
    },
  },
  tags: ['autodocs'],
};
const AlertTemplate = (args) => {
  const { children, ...otherArgs } = args;
  return <Alert {...otherArgs}>{children}</Alert>;
};
export const AlertPlayground = AlertTemplate.bind({});
AlertPlayground.args = {
  onClose: () => {},
  children: "This is a success alert",
};

const AlertDescription = (args) => {
    return (
    <div>
    <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — check it out!
    </Alert>
    <br />
    <br />
    <Alert severity="warning">
    <AlertTitle>Warning</AlertTitle>
    This is a warning alert — check it out!
    </Alert>
    <br />
    <br />
    <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    This is an info alert — check it out!
    </Alert>
    <br />
    <br />
    <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    This is a success alert — check it out!
    </Alert>
    </div>
    );
    };
    export const Description = AlertDescription.bind({});
    Description.parameters = {
    docs: {
    // The story now contains a description
    storyDescription: `You can use the AlertTitle component to display a 
    formatted title above the content.`,
    source: {
    code: null,
    },
    className: 'sample-desc'
    },
    };
    const AlertActions = (args) => {
      return (
      <div>
      <Alert severity="error"
      action={
      <Button color="inherit" size="small">
      UNDO
      </Button>
      }
      >
      This is an error alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
      </div>
      );
      };
      export const Actions = AlertActions.bind({});
      Actions.parameters = {
      docs: {
      // The story now contains a description
      storyDescription: `An alert can have an action, such as a close or undo 
      button. It is rendered after the message, at the end of the alert.`,
      source: {
      code: null,
      },
      },
      };
      const AlertVariants = (args) => {
      return (
      <div>
      <p className="para-elemnst">Outlined</p>
      <Alert variant="outlined" severity="error">
      This is an error alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="outlined" severity="warning">
      This is a warning alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="outlined" severity="info">
      This is an info alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="outlined" severity="success">
      This is a success alert — check it out!
      </Alert>
      <br />
      <br />
      <p className="para-elemnst">Filled</p>
      <Alert variant="filled" severity="error">
      This is an error alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="filled" severity="warning">
      This is a warning alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="filled" severity="info">
      This is an info alert — check it out!
      </Alert>
      <br />
      <br />
      <Alert variant="filled" severity="success">
      This is a success alert — check it out!
      </Alert>
      <br />
      <br />
      </div>
      );
      };
      export const Variants = AlertVariants.bind({});
      Variants.parameters = {
      docs: {
      // The story now contains a description
      storyDescription: `Two additional variants are available – outlined, and 
      filled`,
      source: {
      code: null,
      },
      },
      };




