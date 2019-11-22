# gatsby-plugin-clicky

This plugin provides [Clicky](https://clicky.com) web analytics integration for your Gatsby website.

## Install

`npm install --save gatsby-plugin-clicky`

## Usage

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: 'YOUR_CLICKY_SITE_ID'
      }
    }
  ]
};
```
