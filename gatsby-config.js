module.exports = {
  siteMetadata: {
    title: `home`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "BJw4BKJv_DMkVm2t37eZq2NJ9zZIDK1ky1KsKTMeEUY",
      "spaceId": "ds1ws2qandc3"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};