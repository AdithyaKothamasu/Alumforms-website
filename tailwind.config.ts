import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          gray: "#7A7978",
          smokyBlack: "#131200",
          whiteSmoke: "#F6F4F3", 
          yellowPeel: "#ECA72C",
        }
      },
    },
  },
  plugins: [],
}

export default config