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
                entry: ["./electron/index.ts", "./electron/preload.ts"],
                vite: {
                    resolve: {
                        alias: {
                            "@electron": path.resolve(__dirname, "electron")
                        }
                    }
                }
            }
        ]),
        vue()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
};
