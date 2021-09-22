module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Dream Wheels",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },

  ],

};
