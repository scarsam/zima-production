module.exports = {
  plugins: ["tailwindcss", "postcss-preset-env"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
