import { makeStyles } from "../theme";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      overflowY: "scroll",
      maxHeight: 500,
    },
    scrollable: {
      "& + .MuiDialogActions-root::before": {
        content: "''",
        height: 1,
        width: `calc(100% - ${theme.spacing(8)})`,
        background: theme.palette.background.default,
        top: 0,
        left: theme.spacing(4),
        position: "absolute",
      },
    },
  }),
  { name: "DialogTable" }
);
