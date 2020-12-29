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
        'homepage-background': "url('/images/backgrounds/audio-mixer.jpg')",
        'contact-background': "url('/images/backgrounds/audio-mixer.jpg')",
      }),
      colors: {
        teal: colors.teal,
        emerald: colors.emerald,
      },
    },
    fontFamily: {
      'sans': ['Karla', 'Helvetica', 'Arial', 'sans-serif']
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
