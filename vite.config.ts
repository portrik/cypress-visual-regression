import path from "node:path";
import url from "node:url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, type UserConfigExport } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const directoryName = path.dirname(url.fileURLToPath(import.meta.url));

const configuration: UserConfigExport =defineConfig( {
  build: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    emptyOutDir: true,
    outDir: path.resolve(path.join(directoryName, "build")),
  },

  plugins: [tsConfigPaths(), react()],

  server: {
    port: 8080,
  },
});

export default configuration;
