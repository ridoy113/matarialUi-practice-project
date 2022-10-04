import { createTheme } from "@material-ui/core";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    },
});