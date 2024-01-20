import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    'node_modules/@alisyahidin/ui/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

