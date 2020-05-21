---
date: 2019-04-27
title: Mình đã làm trang blog này như thế nào (Phần 9)?
description: Tạo danh sách bài blog.
keyword:
    - react
    - programming
    - guide
---

Chúng ta đã có thể đọc các bài viết trên blog của mình, tuy nhiên một trang blog hoàn chỉnh cần có một danh sách các bài blog, thường nằm ở trang chính (index)

Mở file `pages/index.js` và thay đổi nội dung của nó như sau:
```jsx
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => {
    const { edges: posts } = data["allMarkdownRemark"]
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div
                                className={style["blogPostPreview"]}
                                key={post.id}
                            >
                                <h2>
                                    <Link to={post.fields["slug"]}>
                                        {post.frontmatter.title}
                                    </Link>
                                </h2>
                                <i>{new Date(post.frontmatter.date).toDateString()}</i>
                            </div>
                        )
                    })}
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`


```

Đồng thời thêm một file `index.module.css` ở cùng thư mục với nội dung như sau:
```css
.blog-post-preview {
    border-bottom: 2px solid #e6e6e6;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}
```

Sau khi restart lại lệnh `gatsby develop`, bạn sẽ thấy được danh sách các bài blog của mình

Vậy là trang blog của bạn coi như đã hoàn thiện. Trong bài tiếp theo, mình sẽ hướng dẫn các bạn deploy code lên netlify để sử dụng.
