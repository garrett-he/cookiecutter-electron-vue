import path from "path";
{% if cookiecutter.vue_version == '2' %}
import vue from "@vitejs/plugin-vue2";
{% else %}
import vue from "@vitejs/plugin-vue";
{% endif %}
import electron from "vite-plugin-electron";

export default {
    plugins: [
        electron([
            {
                entry: [
                    path.resolve(__dirname, "src/main/index.ts"),
                    path.resolve(__dirname, "src/main/preload.ts")
                ],
                vite: {
                    resolve: {
                        alias: {
                            "@main": path.resolve(__dirname, "src/main")
                        }
                    }
                }
            }
        ]),
        vue()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@renderer": path.resolve(__dirname, "src/renderer")
        }
    }
};
