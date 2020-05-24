import React from "react";
import Layout from "src/components/layout";
import style from "./style.module.css";
import { Link } from "gatsby";
import _ from "lodash";

const SeriesEntry = ({ series, name }) => {
    return (
        <>
            <div className={style["blogPostPreview"]}>
                <h2>
                    <Link to={"/series/" + series.slug}>{name}</Link>
                </h2>
                <p>{series.description}</p>
                <b>{series.posts.length} Posts</b>
                <br />
                <br />
            </div>
            <hr />
        </>
    );
};

export default function SeriesListTemplate({ pageContext }) {
    const { seriesList } = pageContext;
    return (
        <Layout>
            <h1>My series</h1>
            <hr />
            {_.map(seriesList, (series, name) => (
                <SeriesEntry name={name} series={series} key={name} />
            ))}
        </Layout>
    );
}
