import {defineConfig, mergeConfig} from "vite";
import configShared from "../vitest.shared.ts";
import vue from "@vitejs/plugin-vue";

export default mergeConfig(configShared, defineConfig({
    test: {
        environment: "jsdom"
    },
    plugins: [
        vue()
    ]
}));
