export default {
  source: ['tokens/global/**/*.json', 'tokens/light/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        { destination: 'tokens.css', format: 'css/variables', options: { outputReferences: true } },
      ],
    },
  },
};
