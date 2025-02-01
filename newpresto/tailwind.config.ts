import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primaryColor:"#f99d1c",
        secondaryColor:"#4c6d84",
        secondaryDark:"#8a97a2",
        secondaryLightColor:"#93b2c7",
        tertoryColor:"#074F57",
        grayColor:"#919090",
        lightGrayColor:"#cacaca"
      },
      backgroundImage: {
        dotPattern: "url('../../src/assets/images/dot.jpeg')",
        dirImage: "url('../../src/assets/images/dir.webp')",
      },
      
      fontSize:{
        40:"40px"
      }
    },
  },
  plugins: [],
} satisfies Config;
