/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all templates to enable Tailwind's purge
  // functionality in production. Since we're using the new app
  // directory, include everything under app/, pages/, and components/.
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // You can extend the default theme here (colours, fonts, etc.)
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
