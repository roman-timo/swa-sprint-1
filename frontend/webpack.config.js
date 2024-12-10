// webpack.config.js for Main App

import { ModuleFederationPlugin } from "webpack";

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "mainApp",
      remotes: {
        auth: "auth@./auth-microfrontend/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
