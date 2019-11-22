exports.onPreInit = ({ reporter }, pluginOptions) => {
  if (!pluginOptions.siteId) {
    reporter.warn(
      `The Clicky plugin requires a site ID. Did you mean to add it?`
    );
  }
};
