import SvgIcon from "@mui/material/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const MailIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        viewBox="0 0 24 25"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.63 6.622c.375-.372.872-.62 1.37-.62h14c.5 0 1 .25 1.375.625M3.63 6.622C3.252 6.997 3 7.5 3 8.002v8c0 .502.252 1.005.63 1.38m0-10.76 5.38 5.38m11.365-5.375c.375.375.625.875.625 1.375v8c0 1-1 2-2 2H5c-.498 0-.995-.248-1.37-.62M20.375 6.627 15 12.002m-5.99 0 1 1c1 1 2.99 1 3.99 0l1-1m-5.99 0-5.38 5.38M15 12.002l5.38 5.38"
        />
      </SvgIcon>
    );
  }
);
