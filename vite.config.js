import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            keyframes: {
              marquee: {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
              "marquee-reverse": {
                "0%": { transform: "translateX(-50%)" },
                "100%": { transform: "translateX(0)" },
              },
            },
            animation: {
              marquee: "marquee var(--duration, 40s) linear infinite",
              "marquee-reverse":
                "marquee-reverse var(--duration, 40s) linear infinite",
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
});
