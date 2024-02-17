import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        'h1': '36px',
      },
      height: {
        '65': '65vh',
        '90': '90%',
      },
      colors: {
        blue: '#1FCBFF',
        red: '#C41C4C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'collie': "url('/home/collie.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
            '100%': '100%',
      },
      backgroundPosition: {
        'bottom-right': 'calc(100%) 10px',
      },
      borderRadius: {
        'xl': '100px',
        'button': '20px',
      },
      margin: {
        'neg2': '-2rem',
      }
    },
  },
  plugins: [],
}
export default config
