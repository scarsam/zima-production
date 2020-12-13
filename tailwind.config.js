const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
       'contact-background': "url('/images/backgrounds/audio-mixer.jpg')",
       'home-background': "url('/images/backgrounds/zima-hero.jpg')",
      }),
      colors: {
        teal: colors.teal,
        emerald: colors.emerald,
      },
    }
  },
  variants: {
    opacity: ['disabled'],
    backgroundColor: ['disabled', 'focus'],
    cursor: ['disabled'],
    borderWidth: ['hover'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
