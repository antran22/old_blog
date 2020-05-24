const path = require("path");

const getPosts = async graphql => {
    const posts = await graphql(`
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
                            series
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
    `);
    if (posts["errors"]) {
        throw posts["errors"];
    }
    return posts;
};

exports.buildPosts = async ({ createPage, graphql, seriesList }) => {
    const blogPostTemplate = path.resolve(`src/templates/posts/index.js`);

    const posts = await getPosts(graphql);
    const postList = posts.data["allMarkdownRemark"]["edges"];

    const promises = postList.map(async ({ node, previous, next }) => {
        const context = {
            previous,
            next,
        };

        const s = node.frontmatter["series"];
        if (s && seriesList[s]) {
            seriesList[s].posts.push(node);
            context["series"] = { ...seriesList[s], name: s };
        }

        createPage({
            path: node.fields["slug"],
            component: blogPostTemplate,
            context,
        });
    });
    await Promise.all(promises);
};
