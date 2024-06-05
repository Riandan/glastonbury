import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf4fb',
          100: '#d0e6f7',
          200: '#b5d7f3',
          300: '#8ac1ec',
          400: '#5caae5',
          500: '#2e93de',
          600: '#287cb7',
          700: '#216291',
          800: '#1a496a',
          900: '#123342',
        },
        secondary: {
          50: '#fff7e6',
          100: '#ffecc7',
          200: '#ffd59e',
          300: '#ffbb74',
          400: '#ffa04d',
          500: '#ff8a23',
          600: '#e67500',
          700: '#b85c00',
          800: '#8a4500',
          900: '#5c2e00',
        },
        tertiary: {
          50: '#e6eff6',
          100: '#ccdcef',
          200: '#99b9e0',
          300: '#6696d0',
          400: '#3364c1',
          500: '#0033b1',
          600: '#002b94',
          700: '#002476',
          800: '#001c59',
          900: '#00143b',
        },
        error: {
          50: '#fdecea',
          100: '#fbd2d1',
          200: '#f8a9aa',
          300: '#f48282',
          400: '#f15b5b',
          500: '#ee3534',
          600: '#cb2d2d',
          700: '#a72527',
          800: '#831e21',
          900: '#5f171b',
        },
        warning: {
          50: '#fff9e6',
          100: '#ffedc6',
          200: '#ffda8d',
          300: '#ffc654',
          400: '#ffb32d',
          500: '#ff9e00',
          600: '#e68700',
          700: '#b86b00',
          800: '#8a4f00',
          900: '#5c3300',
        },
      },
    },
  },
};
export default config;
