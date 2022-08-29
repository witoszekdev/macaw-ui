import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import { ThemeProvider } from "../theme";

export const Decorator = (storyFn: any) => (
  <ThemeProvider defaultTheme={useDarkMode() ? "dark" : "light"}>
    <div
      style={{
        isolation: "isolate",
        padding: 24,
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
);

export const GuideDecorator = (storyFn: any) => (
  <Card style={{ margin: "auto", width: 800 }}>
    <CardContent>{storyFn()}</CardContent>
  </Card>
);
