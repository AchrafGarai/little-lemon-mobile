import { tokens } from "@tamagui/themes";
import * as themes from "./themes/themes";
import { createFont, createTamagui } from "tamagui"; // or '@tamagui/core'

const interFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",
  size: {
    1: 12,
    2: 14,
    3: 15,
    // ...
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: "300",
    6: "600",
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "InterBold", italic: "InterBold-Italic" },
    800: { normal: "InterBold", italic: "InterBold-Italic" },
    900: { normal: "InterBold", italic: "InterBold-Italic" },
  },
});

const appConfig = createTamagui({
  themes,
  tokens,
  fonts: {
    heading: interFont,
    body: interFont,
    mono: interFont,
    silkscreen: interFont,
  },
});
export type AppConfig = typeof appConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default appConfig;
