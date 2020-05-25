import React from "react";
import Layout from "src/components/layout";
import { graphql, Link } from "gatsby";
import SEO from "src/components/seo";
import NavBar from "./navbar";
import style from "./style.module.css";

const SeriesLink = ({ context }) => {
    const { series } = context;
    if (series)
        return (
            <span>
                <i>This post is a part of a series: </i>
                <Link to={`/series/${series.slug}`}>{series.name}</Link>
            </span>
        );
    return null;
};

const PostTemplate = ({ data, pageContext }) => {
    const { markdownRemark: post } = data;
    const { frontmatter, tableOfContents } = post;
    const time = new Date(frontmatter.date);
    return (
        <>
            <Layout>
                <SEO
                    title={frontmatter.title}
                    keywords={frontmatter.keyword}
                    description={frontmatter.description}
                />
                <div className={style.title}>
                    <h1>{frontmatter.title}</h1>
                    <i>{time.toDateString()}</i>
                </div>
                <SeriesLink context={pageContext} />
                <br />
                <br />
                <hr />
                <div className={style.toc}>
                    <h2>Table of content</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: tableOfContents,
                        }}
                    />
                </div>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <NavBar newer={pageContext.next} older={pageContext.previous} />
            </Layout>
        </>
    );
};

export default PostTemplate;

export const query = graphql`
    query($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
                date
                title
                keyword
                description
            }
            fields {
                slug
            }
            tableOfContents(maxDepth: 3)
        }
    }
`;
