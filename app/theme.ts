import { createTheme } from "@mui/material/styles";

export const DEFAULT_COLORS = {
  primary_main: "#5B5BF6",
};

export const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#070B14",
      paper: "rgba(17,17,17,0.7)",
    },

    primary: {
      main: DEFAULT_COLORS.primary_main,
    },
  },

  components: {
    // Global Styles
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#070B14",

          backgroundImage: `
            radial-gradient(circle at top left, rgba(91,91,246,0.28), transparent 28%),
            radial-gradient(circle at top right, rgba(124,77,255,0.18), transparent 22%),
            radial-gradient(circle at bottom left, rgba(0,212,255,0.14), transparent 24%)
          `,

          backgroundAttachment: "fixed",

          minHeight: "100vh",

          position: "relative",

          overflowX: "hidden",

          color: "#fff",

          "&::before": {
            content: '""',

            position: "fixed",

            width: 320,
            height: 320,

            top: -120,
            left: -80,

            borderRadius: "50%",

            background: "rgba(91,91,246,0.30)",

            filter: "blur(120px)",

            pointerEvents: "none",

            zIndex: -1,
          },

          "&::after": {
            content: '""',

            position: "fixed",

            width: 280,
            height: 280,

            bottom: -100,
            right: -80,

            borderRadius: "50%",

            background: "rgba(124,77,255,0.22)",

            filter: "blur(120px)",

            pointerEvents: "none",

            zIndex: -1,
          },
        },

        "#root": {
          minHeight: "100vh",
        },
      },
    },

    // Text Field
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    // Input
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.45)",

          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          color: "#fff",

          borderRadius: 12,

          transition: "all .2s ease",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.08)",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.16)",
          },

          "&.Mui-focused": {
            boxShadow: "0 0 0 4px rgba(91,91,246,0.15)",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5B5BF6",
          },
        },

        input: {
          color: "#fff",

          "&::placeholder": {
            color: "#888",
            opacity: 1,
          },
        },
      },
    },

    // Input Label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,

          color: "#888",

          "&.Mui-focused": {
            color: "#7C4DFF",
          },
        },
      },
    },

    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,

          textTransform: "none",

          fontWeight: 600,

          paddingInline: 18,

          paddingBlock: 10,
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },

          style: {
            background: "linear-gradient(135deg, #5B5BF6 0%, #7C4DFF 100%)",

            boxShadow: "0 8px 24px rgba(91,91,246,0.35)",

            "&:hover": {
              background: "linear-gradient(135deg, #6A6AFF 0%, #8A63FF 100%)",

              boxShadow: "0 12px 32px rgba(91,91,246,0.45)",
            },
          },
        },
      ],
    },

    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.08)",

          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          border: "1px solid rgba(255, 255, 255, 0.12)",

          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",

          borderRadius: 24,

          backgroundImage: "none",
        },
      },
    },

    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.08)",
        },
      },
    },
  },
});
