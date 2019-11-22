export const onRouteUpdate = ({ location }, pluginOptions) => {
  if (process.env.NODE_ENV !== `production` || typeof clicky !== `object`) {
    return null;
  }

  // We need to send page views manually because Gatsby websites don't refresh
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;
    clicky.log(pagePath, document.title, 'pageview');
  };

  // Minimum delay for reactHelmet's requestAnimationFrame
  setTimeout(sendPageView, 32);

  return null;
};
