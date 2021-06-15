import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import React from "react";

import ArrowDropdown from "../icons/ArrowDropdown";
import useStyles from "./styles";

export interface UserChipProps {
  avatar: string | null;
  initials: string;
  name: string;
  subtext?: string;
}

export const UserChip: React.FC<UserChipProps> = ({
  avatar,
  initials,
  name,
  subtext,
  children,
}) => {
  const classes = useStyles({});
  const [isMenuOpened, setMenuState] = React.useState(false);
  const anchor = React.useRef<HTMLDivElement>(null);

  return (
    <div className={classes.userMenuContainer}>
      <Chip
        avatar={
          avatar ? (
            <Avatar alt="user" src={avatar} />
          ) : (
            <div className={classes.avatarPlaceholder}>
              <div className={classes.avatarInitials}>{initials}</div>
            </div>
          )
        }
        classes={{
          avatar: classes.avatar,
        }}
        className={classes.userChip}
        label={
          <div className={classes.labelContainer}>
            <Hidden smDown>
              <div>
                <Typography className={classes.label} variant="body2">
                  {name}
                </Typography>
                {subtext && (
                  <Typography
                    className={classes.label}
                    variant="body2"
                    color="textSecondary"
                  >
                    {subtext}
                  </Typography>
                )}
              </div>
            </Hidden>
            <ArrowDropdown
              className={classNames(classes.arrow, {
                [classes.rotate]: isMenuOpened,
              })}
            />
          </div>
        }
        onClick={() => setMenuState(!isMenuOpened)}
        ref={anchor}
        data-test="userMenu"
      />
      <Popper
        className={classes.popover}
        open={isMenuOpened}
        anchorEl={anchor.current}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "right top" : "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={() => setMenuState(false)}
                mouseEvent="onClick"
              >
                <Menu>{children}</Menu>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
UserChip.displayName = "UserChip";
