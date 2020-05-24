const slugify = require("slugify");
const _ = require("lodash");
const path = require("path");
const ser = require("../data/series").series;

exports.getSeriesList = () => {
    const seriesList = {};
    _.forEach(ser, s => {
        seriesList[s.name] = {
            slug: s.slug || slugify(s.name.toLowerCase()),
            description: s.description || "",
            posts: [],
        };
    });
    return seriesList;
};

exports.buildSeriesPage = ({ seriesList, createPage }) => {
    const seriesPageTemplate = path.resolve(`src/templates/series/index.js`);

    const seriesListTemplate = path.resolve(
        `src/templates/seriesList/index.js`,
    );

    _.forEach(seriesList, (series, name) => {
        createPage({
            path: `/series/${series.slug}/`,
            component: seriesPageTemplate,
            context: { postList: series.posts, name: name },
        });
    });

    createPage({
        path: "/series/",
        component: seriesListTemplate,
        context: { seriesList },
    });
};
