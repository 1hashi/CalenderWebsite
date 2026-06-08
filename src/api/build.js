const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    target: "node22",
    outfile: "dist/index.js",
});