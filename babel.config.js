module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 12,
        },
      },
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
    sourceMaps: 'inline',
  };
};
