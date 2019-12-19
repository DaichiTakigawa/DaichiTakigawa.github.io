module.exports = {
  siteMetadata: {
    title: `TAKIGWA'S MEMO`,
    description: `日頃の備忘録をまとめたものです。\n主に、Android、AWS、競プロ、Windowsのことについて書いていきます。`,
    author: `Daichi Takigawa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TAKIGAWA'S MEMO`,
        short_name: `TAKIGAWA'S MEMO`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-plugin-less`,
  ],
}
