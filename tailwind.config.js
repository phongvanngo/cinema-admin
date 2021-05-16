module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        admin_color_1: 'var(--admin-color-1)',
        admin_color_2: 'var(--admin-color-2)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
