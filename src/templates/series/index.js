import React from "react";
import Layout from "src/components/layout";
import style from "./style.module.css";
import { Link } from "gatsby";
import TagList from "src/components/tagList";

const PageEntry = ({ post }) => {
    const { title, keyword, date, description } = post.frontmatter;
    return (
        <>
            <div className={style["blogPostPreview"]}>
                <h2>
                    <Link to={post.fields["slug"]}>{title}</Link>
                </h2>
                <i>
                    {new Date(date).toDateString()}
                    {" • "}
                    {post["fields"]["readingTime"]["text"]}
                </i>
                <br />
                <br />
                <TagList keyword={keyword} />
                <br />
                <br />
                <h4>{description}</h4>
            </div>
            <hr />
        </>
    );
};

export default function Template({ pageContext }) {
    return (
        <>
            <Layout>
                <h1>The {pageContext.name} series</h1>
                <hr />
                {pageContext.postList.map((post, id) => (
                    <PageEntry post={post} key={id} />
                ))}
            </Layout>
        </>
    );
}
