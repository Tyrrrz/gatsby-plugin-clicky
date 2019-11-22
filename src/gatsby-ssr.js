import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV !== `production` || !pluginOptions.siteId) {
    return null;
  }

  // Inject Clicky script into <head>
  return setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(${pluginOptions.siteId});`
      }}
    />,
    <script async src="//static.getclicky.com/js" />
  ]);
};
