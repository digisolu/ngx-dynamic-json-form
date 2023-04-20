import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // Brand
  brandTitle: "NGX Dynamic JSON Form",
  brandTarget: "_self",

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Colors
  colorSecondary: "#3f51b5",

  // UI
  appBg: "#eee",
  appContentBg: "#fefefe",
  appBorderColor: "#ccc",
  appBorderRadius: 0,
});
