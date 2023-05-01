import { addons } from "@storybook/manager-api";
import NgxTheme from "./ngx-dynamic-json-form";

addons.setConfig({
  theme: NgxTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: false,
  selectedPanel: undefined,
  initialActive: "sidebar",
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
});

const storybookLayout = JSON.parse(localStorage["storybook-layout"] || "{}");
const newLayout = { resizerNav: { x: 350, y: 0 } };
localStorage["storybook-layout"] = JSON.stringify({ ...storybookLayout, ...newLayout });
