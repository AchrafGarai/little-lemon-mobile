import { tokens } from "@tamagui/themes";
import * as themes from "./themes/themes";
import { createFont, createTamagui } from "tamagui"; // or '@tamagui/core'

const interFont = createFont({
  family: "Inter",
  size: {
    true: 12,
    1: 12,
    2: 14,
    3: 15,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    // ...
  },
  lineHeight: {
    true: 16,
    1: 17,
    2: 22,
    3: 25,
    8: 48,
    9: 48,
    // ...
  },
  weight: {
    true: "$600",
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
    600: { normal: "Inter", italic: "Inter-Italic" },
    700: { normal: "Inter", italic: "Inter-Italic" },
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
