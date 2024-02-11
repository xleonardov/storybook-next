module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['src/styles/breakpoints.css'],
    },
    'postcss-preset-env': {
      autoprefixer: {
        stage: 3,
        grid: false,
        flexbox: 'no-2009',
        features: {
          'custom-properties': false,
        },
      },
    },
    'postcss-custom-media': {},
  },
};
