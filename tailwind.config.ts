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
          50: '#e2eaf0',
          100: '#c4d4e1',
          200: '#a5bdcf',
          300: '#86a6bc',
          400: '#678fa9',
          500: '#487897',
          600: '#365f75',
          700: '#244553',
          800: '#132b31',
          900: '#01110f',
        },
        secondary: {
          50: '#fdeeea',
          100: '#fbd5cf',
          200: '#f8bcb3',
          300: '#f4a297',
          400: '#f1887b',
          500: '#ed6f60',
          600: '#c4584b',
          700: '#9b4236',
          800: '#722c22',
          900: '#49170e',
        },
        tertiary: {
          50: '#e7f4f4',
          100: '#cceae9',
          200: '#b1dfdd',
          300: '#95d5d2',
          400: '#7acac6',
          500: '#5fbfaf',
          600: '#4b9990',
          700: '#387372',
          800: '#254d53',
          900: '#13262e',
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
