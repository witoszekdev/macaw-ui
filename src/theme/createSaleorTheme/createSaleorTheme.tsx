import { createTheme as createMuiTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

import { overrides } from "./overrides";
import { createPalette } from "./palette";
import { shadows } from "./shadows";
import { SaleorTheme, SaleorThemeColors } from "./types";

export const ICONBUTTON_SIZE = 48;

const fontFamily = "'Source Sans Pro', sans-serif";

export const createTheme = (colors: SaleorThemeColors): SaleorTheme =>
  createMuiTheme({
    components: {
      ...overrides(colors, fontFamily),
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            borderWidth: 0,
            overflow: "visible",
          },
        },
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            ".MuiCardContent-root + &": {
              paddingTop: 0,
            },
            padding: "3.2rem 3.2rem 3.2rem",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            ".MuiCardHeader-root + &": {
              paddingTop: 0,
            },
            padding: "2.4rem 3.2rem",
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          action: {
            position: "relative",
            top: 4,
          },
          root: {
            padding: "2.4rem 3.2rem",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          avatar: {
            fontSize: "1.2rem",
            height: 32,
            left: -5,
            position: "relative",
            width: 32,
          },
          root: {
            "& $avatar": {
              fontSize: "1.2rem",
            },
            fontSize: "1.3rem",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            overflowY: undefined,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            borderTop: `1px solid ${colors.divider}`,
            padding: "16px 24px",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            overflowX: undefined,
            overflowY: undefined,
            padding: "24px 0px",
            margin: "0px 24px",
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            "&:last-child": {
              marginBottom: 0,
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          light: {
            backgroundColor: colors.background.paper,
          },
        },
      },
      //   MuiExpansionPanelSummary: {
      // styleOverrides: {

      //     // expandIcon: {
      //     //   ...getSecondaryButtonStyles(colors),
      //     //   border: "none",
      //     // },
      //   }
      //   },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            lineHeight: 1.2,
            marginLeft: 4,
          },
          root: {
            marginLeft: -14,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          filled: {
            "&&:not($error)": {
              color: colors.active[1],
            },
          },
          root: {
            "&&$focused:not($error)": {
              color: colors.main[3],
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: "2.4rem",
            height: "1em",
            width: "1em",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          button: {
            "&:focus": {
              background: colors.active[5],
              color: colors.main[1],
            },
          },
          root: {
            "&$selected": {
              "&:hover": {
                backgroundColor: colors.main[1],
              },
              backgroundColor: colors.main[1],
              outline: 0,
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: 0,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&$selected, &$selected:focus, &$selected:hover": {
              backgroundColor: [colors.active[5], "!important"] as any,
              color: colors.active[1],
            },
            "&:hover": {
              backgroundColor: [colors.active[5], "!important"] as any,
            },
            "@media(min-width: 600px)": {
              minHeight: 48,
            },
            cursor: "pointer",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          // root: {
          //   "&:disabled": {
          //     backgroundColor: colors.background.default,
          //   },
          // },
        },
      },
      MuiSnackbarContent: {
        styleOverrides: {
          action: {
            "& $MuiIconButton": {
              "& svg": {
                color: colors.main[1],
              },
            },
            display: "block",
            paddingBottom: 10,
            paddingLeft: 0,
            paddingRight: 45,
          },
          message: {
            fontSize: 16,
          },
          root: {
            backgroundColor: colors.background.paper,
            boxShadow:
              "0 6px 10px 0px rgba(0, 0, 0, 0.15), 0 1px 18px 0px rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.10)",
            color: colors.main[1],
            display: "block",
            maxWidth: 480,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          arrow: {
            color: colors.alert.icon.info,
          },
          tooltip: {
            backgroundColor: colors.alert.icon.info,
            fontSize: "0.8em",
            padding: 16,
          },
        },
      },
      MuiTouchRipple: {
        styleOverrides: {
          child: {
            backgroundColor: alpha(colors.active[1], 1),
          },
          childLeaving: {
            backgroundColor: alpha(colors.active[1], 1),
          },
          ripple: {
            "&$rippleVisible": {
              backgroundColor: alpha(colors.active[1], 1),
            },
            borderRadius: "100%",
          },
        },
      },
    },
    palette: createPalette(colors),
    // TO-DO
    // renamed to "components"
    // props: {
    //   MuiButton: {
    //     disableRipple: true,
    //   },
    //   MuiFormControl: {
    //     variant: "filled",
    //   },
    //   MuiTextField: {
    //     variant: "outlined",
    //   },
    //   MuiCard: {
    //     elevation: 0,
    //   },
    //   MuiExpansionPanelSummary: {
    //     IconButtonProps: {
    //       disableRipple: true,
    //     },
    //   },
    //   MuiLink: {
    //     style: {
    //       color: colors.active[1],
    //     },
    //   },
    //   MuiTypography: {
    //     component: "div",
    //   } as TypographyProps,
    //   MuiCheckbox: {
    //     color: "primary",
    //     disableRipple: true,
    //     checkedIcon: <CheckboxCheckedIcon />,
    //     icon: <CheckboxIcon />,
    //     indeterminateIcon: <CheckboxIndeterminateIcon />,
    //   },
    //   MuiMenuItem: {
    //     button: false,
    //   },
    //   MuiTableRow: {
    //     hover: true,
    //   },
    //   MuiTooltip: {
    //     placement: "right-end",
    //   },
    //   MuiList: {
    //     disablePadding: true,
    //   },
    //   MuiRadio: {
    //     color: "primary",
    //     disableRipple: true,
    //     icon: <RadioIcon />,
    //     checkedIcon: <RadioCheckedIcon />,
    //   },
    //   MuiSwitch: {
    //     color: "primary",
    //     disableRipple: true,
    //   },
    //   MuiSelect: {
    //     MenuProps: {
    //       anchorOrigin: {
    //         vertical: "bottom",
    //         horizontal: "left",
    //       },
    //       transformOrigin: {
    //         vertical: "top",
    //         horizontal: "left",
    //       },
    //       getContentAnchorEl: null,
    //     },
    //   },
    // },
    shadows,
    spacing: (value: number = 1) => `${(value * 8) / 10}rem`,
    typography: {
      allVariants: {
        fontFamily,
        letterSpacing: "0.02rem",
      },
      body1: {
        color: colors.main[1],
        fontSize: "1.6rem",
      },
      body2: {
        fontSize: "1.4rem",
        lineHeight: 1.56,
      },
      button: {
        fontSize: "1.4rem",
      },
      caption: {
        fontSize: "1.2rem",
        letterSpacing: 0,
      },
      fontFamily,
      h1: {
        fontSize: "4rem",
        fontWeight: 700,
      },
      h4: {
        fontSize: "3.4rem",
        color: colors.main[1],
      },
      h5: {
        fontSize: "2.1rem",
        fontWeight: 500,
      },
      h6: {
        fontSize: "2rem",
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: "1.6rem",
      },
      subtitle2: {
        fontSize: "1.4rem",
      },
    },
  }) as unknown as SaleorTheme;
