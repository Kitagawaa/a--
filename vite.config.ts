/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

function getPlugins() {
  const plugins = [react(), tsconfigPaths(), svgr()];
  return plugins;
}

export default defineConfig({
  plugins: getPlugins(),
});
