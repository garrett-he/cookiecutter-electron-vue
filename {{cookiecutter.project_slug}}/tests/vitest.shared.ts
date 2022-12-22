import {defineConfig} from "vitest/config";
import path from "path";

export default defineConfig({
    test: {
        setupFiles: [path.resolve(__dirname, "setup.ts")]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "@electron": path.resolve(__dirname, "../electron")
        }
    }
});
