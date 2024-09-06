import path from "path";
import webpack from "webpack";

import { buildConfig } from "./config/build/buildConfig";
import { BuildPaths } from "./config/types";

const paths: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "production";

//@ts-ignore
const isDev = mode === "development";

const config: webpack.Configuration = buildConfig({
  mode,
  paths,
  isDev,
});

export default config;
