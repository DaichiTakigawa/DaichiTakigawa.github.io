module.exports = {
  siteMetadata: {
    title: `たきがわのメモ`,
    description: `日頃の備忘録をまとめたものです。
    主に、Android、AWS、競プロ、Windowsのことについて書いていきます。
    競技プログラミングもやっています。
    `,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-155152113-1",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://takigawamemo.netlify.com`,
        sitemap: `https://takigawamemo.netlify.com/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
