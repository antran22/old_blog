import React from "react"
import Layout from "../layout"
import { graphql, Link } from "gatsby"
import SEO from "../seo"
import NavBar from "./navbar"
import style from "./style.module.css"

function SeriesLink({ context }) {
    if (context.series)
        return (
            <i>
                This post is a part of{" "}
                <Link to={context.series}>this series</Link>
            </i>
        )
    return <div />
}

export default function Template({ data, pageContext }) {
    const { markdownRemark: post } = data
    const time = new Date(post.frontmatter.date)
    return (
        <>
            <Layout>
                <SEO
                    title={post.frontmatter.title}
                    keywords={post.frontmatter.keyword}
                    description={post.frontmatter.description}
                />
                <div className={style.title}>
                    <h1>{post.frontmatter.title}</h1>
                    <i>{time.toDateString()}</i>
                </div>
                <SeriesLink context={pageContext} />
                <br/>
                <br/>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <NavBar newer={pageContext.newer} older={pageContext.older} />
            </Layout>
        </>
    )
}
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
        }
    }
`
