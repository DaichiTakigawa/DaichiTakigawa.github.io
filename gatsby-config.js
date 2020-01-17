module.exports = {
  siteMetadata: {
    title: `たきがわのメモ`,
    description: `日頃の備忘録をまとめたものです。主に、Android、AWS、競プロ、Windowsのことについて書いていきます。競技プログラミングもやっています。 `,
    author: `Daichi Takigawa`,
    siteUrl: `https://takigawamemo.netlify.com`,
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
        name: `たきがわのメモ`,
        short_name: `たきがわ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
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
              offsetY: `10`,
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
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-M7PKKQ6",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://takigawamemo.netlify.com`,
        sitemap: `https://takigawamemo.netlify.com/sitemap.xml`,
        env: {
          production: {
            policy: [
              { userAgent: "*", allow: "/" },
              { userAgent: "*", disallow: "/contact" },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false
      }
    },
  ],
}
