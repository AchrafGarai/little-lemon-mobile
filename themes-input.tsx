import { createSoftenMask, createThemeBuilder } from "@tamagui/theme-builder";
import { palettes } from "./themes/palettes";
import { templates } from "./themes/templates";
const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)

  .addTemplates(templates)

  .addMasks({
    soften: createSoftenMask(),
  })

  .addThemes({
    light: {
      template: "base",

      palette: "light",
    },

    dark: {
      template: "base",

      palette: "dark",
    },
  })

  .addChildThemes({
    subtle: {
      mask: "soften",
    },
  });
export const themes = themesBuilder.build();
