// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust path if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        libertinus: ['"Libertinus Math"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
