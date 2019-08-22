import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>Không tồn tại</h1>
        <p>Bạn vừa đến một địa chỉ không tồn tại</p>
    </Layout>
);

export default NotFoundPage;
