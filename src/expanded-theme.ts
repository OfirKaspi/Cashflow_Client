import { Palette as MuiPalette, PaletteColor as MuiPaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface CustomPaletteColor extends MuiPaletteColor {
        [key: number]: string;
    }

    interface Palette extends MuiPalette {
        tertiary: CustomPaletteColor;
    }
}
