import { StorageStack } from "./StorageStack";
import { App } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";

/**
 * @param {App} app
 */
export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(MyStack).stack(ApiStack);
}
