const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

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

function depth(str) {
    let cnt = 0;
    for (let char of str) {
        if (char === "/") cnt++;
    }
    return cnt - 1;
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(
        `src/components/postTemplate/index.js`,
    );
    const seriesPageTemplate = path.resolve(
        `src/components/seriesTemplate/index.js`,
    );
    const seriesListTemplate = path.resolve(
        `src/components/seriesListTemplate/index.js`,
    );
    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            description
                            keyword
                        }
                        fields {
                            slug
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result["errors"]) {
            return Promise.reject(result["errors"]);
        }
        const postList = result.data["allMarkdownRemark"]["edges"];
        const seriesList = {};
        postList.forEach(({ node }, index) => {
            const older =
                index === postList.length - 1 ? null : postList[index + 1].node;
            const newer = index === 0 ? null : postList[index - 1].node;
            const context = {
                older,
                newer,
            };
            if (depth(node.fields["slug"]) === 2) {
                const seriesName = node.fields["slug"].split("/")[1];
                if (!seriesList[seriesName]) {
                    seriesList[seriesName] = [node];
                } else {
                    seriesList[seriesName].push(node);
                }
                context["series"] = seriesName;
            }
            createPage({
                path: node.fields["slug"],
                component: blogPostTemplate,
                context,
            });
        });
        const seriesKey = Object.keys(seriesList);
        seriesKey.forEach(s => {
            createPage({
                path: `/${s}/`,
                component: seriesPageTemplate,
                context: { postList: seriesList[s], name: s },
            });
        });
        createPage({
            path: "/series/",
            component: seriesListTemplate,
            context: { series: seriesKey },
        });
    });
};
