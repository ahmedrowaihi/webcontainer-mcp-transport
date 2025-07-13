import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  name: "webcontainer-mcp-transport",
  entries: ["webcontainer-transport.ts"],
  outDir: "dist",
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});