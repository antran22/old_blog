import React from 'react';
import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header';
import style from './layout.module.css';
import './theme.css';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header
                    siteTitle={data.site.siteMetadata.title}
                    siteDescription={data.site.siteMetadata.description}
                />
                <div className={style.div}>
                    <main>{children}</main>
                </div>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
