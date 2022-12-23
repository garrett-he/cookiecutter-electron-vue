import {defineConfig} from "vitest/config";
import path from "path";

export default defineConfig({
    test: {
        setupFiles: [path.resolve(__dirname, "setup.ts")]
    },
    resolve: {
        alias: {
            "@main": path.resolve(__dirname, "../src/main"),
            "@renderer": path.resolve(__dirname, "../src/renderer")
        }
    }
});
