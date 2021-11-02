import DialogContent, {
  DialogContentProps,
} from "@material-ui/core/DialogContent";
import clsx from "clsx";
import React from "react";

import { useStyles } from "./styles";

export const DialogScrollableContent: React.FC<DialogContentProps> = ({
  children,
  innerRef,
  ...props
}) => {
  const classes = useStyles();
  const [contentEl, setContentEl] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContent
      classes={{
        root: clsx(classes.root, {
          [classes.scrollable]:
            contentEl && contentEl.clientHeight < contentEl.scrollHeight,
        }),
      }}
      ref={setContentEl}
      {...props}
    >
      {children}
    </DialogContent>
  );
};
DialogScrollableContent.displayName = "DialogScrollableContent";
