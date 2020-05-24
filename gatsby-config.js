const config = require("./data/config.json");
const path = require("path");

module.exports = {
    siteMetadata: config,
    plugins: [
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                src: path.join(__dirname, "src"),
            },
        },
        `gatsby-plugin-netlify-cms`,
        `gatsby-remark-reading-time`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        "gatsby-plugin-antd",
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/data/posts`,
                name: "pages",
            },
        },
        "gatsby-plugin-react-svg",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        className: `link-class`,
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            strict: `ignore`,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 800,
                            ratio: 1.77,
                            height: 400,
                            related: false,
                            noIframeBorder: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: "~",
                            aliases: {},
                            showLineNumbers: true,
                            noInlineHighlight: false,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `aldermann blog`,
                short_name: `blog`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
    ],
};
