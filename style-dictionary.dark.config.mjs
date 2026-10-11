export default {
  source: ['tokens/dark/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens-dark.css',
          format: 'css/variables',
          options: { selector: '[data-theme="dark"]', outputReferences: false },
        },
      ],
    },
  },
};
