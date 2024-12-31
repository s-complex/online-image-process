import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  presets: [
    presetUno()
  ]
});
