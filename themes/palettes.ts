export const palettes = (() => {
  const lightTransparent = "rgba(255,255,255,0)";
  const darkTransparent = "rgba(10,10,10,0)";

  const transparent = (hsl: string, opacity = 0) =>
    hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`);

  const lightColor = "hsl(0, 0%, 9.0%)";
  const lightPalette = [
    lightTransparent,
    "#fff",
    "#f8f8f8",
    "hsl(0, 0%, 96.3%)",
    "hsl(0, 0%, 94.1%)",
    "hsl(0, 0%, 92.0%)",
    "hsl(0, 0%, 90.0%)",
    "hsl(0, 0%, 88.5%)",
    "hsl(0, 0%, 81.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 50.3%)",
    "hsl(0, 0%, 42.5%)",
    lightColor,
    darkTransparent,
  ];

  const darkColor = "#fff";
  const darkPalette = [
    darkTransparent,
    "#050505",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#a5a5a5",
    darkColor,
    lightTransparent,
  ];

  return {
    light: lightPalette,
    dark: darkPalette,
  };
})();
