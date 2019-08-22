import React from "react";
import Layout from "../layout";
import style from "./style.module.css";
import { Link } from "gatsby";

const SeriesEntry = ({ name }) => {
    return (
        <>
            <div className={style["blogPostPreview"]}>
                <h2>
                    <Link to={name}>{name}</Link>
                </h2>
                <br />
                <br />
            </div>
            <hr />
        </>
    );
};

export default function Template({ pageContext }) {
    return (
        <>
            <Layout>
                <h1>My series</h1>
                <hr />
                {pageContext["series"].map((seriesName, id) => (
                    <SeriesEntry name={seriesName} key={id} />
                ))}
            </Layout>
        </>
    );
}
