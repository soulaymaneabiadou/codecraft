import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.css';
import { Layout } from '@components/Layout';
import { getPageInfo, getTableOfContents } from '@utils/index';

const App = ({ Component, pageProps }: AppProps) => {
  const title = pageProps.markdoc?.frontmatter.title;
  const pageInfo = getPageInfo(pageProps);
  const tableOfContents = getTableOfContents(pageProps);

  return (
    <Fragment>
      <Head>
        <title>{pageInfo.title}</title>
        <meta name='description' content={pageInfo.description} />
      </Head>

      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default App;
