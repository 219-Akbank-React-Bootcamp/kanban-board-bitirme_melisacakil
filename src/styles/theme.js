import { createTheme } from "@mui/material/styles";
import { cyan, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      light: cyan[200],
      main: cyan[300],
    },
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.25rem",
    },
    h3: {
      fontSize: "1rem",
    },
    h4: {
      fontSize: "14px",
      lineHeight: "1.5",
    },
    h5: {
      fontSize: "13px",
    },
  },
  components: {
    /*buton hatası verirse*/
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
