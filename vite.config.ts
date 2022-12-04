import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      emptyOutDir: false,
      lib: {
        entry: ["./src/index.ts", "./src/recma-jsx-rewrite-qwik.ts"],
        formats: ["es", "cjs"],
        fileName: (format, entryName) =>
          `${entryName}.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: ["unified"],
      },
    },
    plugins: [qwikVite()],
  };
});
