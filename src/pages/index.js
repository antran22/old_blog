import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import { Pagination } from 'antd';

import Layout from '../components/layout';
import SEO from '../components/seo';
import style from './index.module.css';
import Info from '../components/info';
import TagList from '../components/tagList';

const PageEntry = ({ post }) => {
    const { title, keyword, date, description } = post.frontmatter;
    return (
        <>
            <div className={style['blogPostPreview']} key={post.id}>
                <h2>
                    <Link to={post.fields['slug']}>{title}</Link>
                </h2>
                <i>
                    {new Date(date).toDateString()}
                    {' • '}
                    {post.fields.readingTime.text}
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

function IndexPage({ data }) {
    let { edges: posts } = data['allMarkdownRemark'];
    posts = posts.filter(post => post.node.frontmatter.title.length > 0);
    const [page, setPage] = useState(1);
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[
                    'programming',
                    'music',
                    'blogging',
                    'guitar',
                    'developer',
                ]}
            />
            <Info />
            <div>
                {posts.slice((page - 1) * 5, page * 5).map(({ node: post }) => (
                    <PageEntry key={post.id} post={post} />
                ))}
            </div>
            <Pagination
                className={style.pagination}
                total={posts.length}
                pageSize={5}
                onChange={page => setPage(page)}
            />
        </Layout>
    );
}

IndexPage.propTypes = { data: PropTypes.any };

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
`;
