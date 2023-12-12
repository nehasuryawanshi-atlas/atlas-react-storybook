import { Badge, BadgeDot, BadgeAlignments, BadgeVisibility } from "./Badge";
import { Mail } from "@mui/icons-material";
export default {
  title: "Data Display/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["dot", "standard"],
      control: { type: "radio" },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Badges are small status descriptors or visual indicators for     UI elements. ",
      },
    },
  },
  tags: ["autodocs"],
};
const Template = (args) => {
  const { icon } = args;
  return <Badge {...args}>{icon}</Badge>;
};
export const BadgeBasic = Template.bind({});
BadgeBasic.args = {
  color: "primary",
  badgeContent: 4,
  anchorOrigin: { vertical: "top", horizontal: "right" },
  icon: <Mail color="action" />,
};
BadgeBasic.parameters = {
  docs: {
    source: {
      code: `<Badge badgeContent={4} color="primary">
    <Mail color="action" />
    </Badge>
    `,
      language: "jsx",
      type: "auto",
      format: true,
    },
  },
};

const OverviewDescription = () => {
  return (
    <div class="css-14m39zm p.sbdocs">
      A badge represents dynamic information such as a number of pending
      requests. A badge consists of a small circle, typically containing a
      number or other short set of characters, that appears in proximity to
      another object.
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
const Template1 = (args) => BadgeDot(args);
export const BadgesDot = Template1.bind({});
BadgesDot.parameters = {
  docs: {
    source: {
      code: `Badge color="primary" variant="dot">
    <Mail />
    </Badge>
    `,
      language: "jsx",
      type: "auto",
      format: true,
    },
  },
};
const Template2 = (args) => BadgeAlignments(args);
export const BadgeAlignment = Template2.bind({});
BadgeAlignment.parameters = {
  docs: {
    source: {
      code: `
    <Badge
    badgeContent={4}
    color="primary"
    anchorOrigin={{
    vertical: "top",
    horizontal: "right",
    }}
    >
    <Mail />
    </Badge>
    <br />
    <Badge
    badgeContent={10}
    color="primary"
    anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
    }}
    >
    <Mail />
    </Badge>
    `,
      language: "jsx",
      type: "auto",
      format: true,
    },
  },
};
const Template3 = (args) => BadgeVisibility(args);
export const BadgeVisibilitys = Template3.bind({});
BadgeVisibilitys.parameters = {
  docs: {
    source: {
      code: `const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const handleBadgeVisibility = () => {
    setInvisible(!invisible);
    };
    return (
    <Box
    sx={{
    color: "action.active",
    display: "flex",
    flexDirection: "column",
    "& > *": {
    marginBottom: 2,
    },
    "& .MuiBadge-root": {
    marginRight: 4,
    },
    }}
    >
    <div>
    <Badge color="primary" badgeContent={count}>
    <Mail />
    </Badge>
    <ButtonGroup>
    <Button
    aria-label="reduce"
    onClick={() => {
    setCount(Math.max(count - 1, 0));
    }}
    >
    <Remove fontSize="small" />
    </Button>
    <Button
    aria-label="increase"
    onClick={() => {
    setCount(count + 1);
    }}
    >
    <Add fontSize="small" />
    </Button>
    </ButtonGroup>
    </div>
    <div>
    <Badge color="primary" variant="dot" invisible={invisible}>
    <Mail />
    </Badge>
    <FormControlLabel
    sx={{ color: "text.primary" }}
    control={
    <Switch checked={!invisible} onChange={handleBadgeVisibility} />
    }
    label="Show Badge"
    />
    </div>
    </Box>
    );
    `,
      language: "jsx",
      type: "auto",
      format: true,
    },
  },
};
