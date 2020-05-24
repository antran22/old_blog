const { createFilePath } = require(`gatsby-source-filesystem`);
const { buildPosts } = require("./posts");
const { getSeriesList, buildSeriesPage } = require("./series");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        let slug = createFilePath({ node, getNode, basePath: `posts` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const seriesList = getSeriesList();
    await buildPosts({ createPage, graphql, seriesList });
    await buildSeriesPage({ createPage, seriesList });
};
