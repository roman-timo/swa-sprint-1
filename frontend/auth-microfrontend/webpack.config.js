// webpack.config.js for Main App

import { ModuleFederationPlugin } from "webpack";

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Login": "./src/components/Login.js",
        "./Register": "./src/components/Register.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
