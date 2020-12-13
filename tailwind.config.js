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
      })
    }
  },
  variants: {
    opacity: ['disabled'],
    backgroundColor: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
