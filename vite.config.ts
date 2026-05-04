import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/ecommSQL/" : "/",
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared", "index.html"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url.endsWith(".ts") || req.url.endsWith(".tsx") || req.url.includes(".tsx?") || req.url.includes(".ts?"))) {
          res.setHeader("Content-Type", "application/javascript");
        }
        next();
      });
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
