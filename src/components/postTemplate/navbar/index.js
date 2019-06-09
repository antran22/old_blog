import React from "react"
import { Link } from "gatsby"
import style from "./navbar.module.css"
const LinkTo = ({ node, className, children }) => {
    if (node)
        return (
            <div className={className}>
                <Link to={node.fields["slug"]}>
                    {children}
                    <br />
                    {node.frontmatter.title}
                </Link>
            </div>
        )
    return null
}
const NavBar = ({ older, newer }) => {
    return (
        <div className={style.navbar}>
            <LinkTo node={older} className={style.older}>
                Older Post
            </LinkTo>
            <LinkTo node={newer} className={style.newer}>
                Newer Post
            </LinkTo>
        </div>
    )
}
export default NavBar
