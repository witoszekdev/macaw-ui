import SvgIcon from "@mui/material/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const SortBigSmallIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          d="M10 4v12m0-12L6 8m4-4 4 4"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </SvgIcon>
    );
  }
);
