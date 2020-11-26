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
      })
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
