import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7B6CF0'
      },
      fontSize: {
        'xxs': '.625rem', // 10px
      },
    },
  },
    plugins: [
        require('flowbite/plugin')
    ]
}
export default config
