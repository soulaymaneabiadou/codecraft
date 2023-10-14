import collectHeadings from './collectHeadings';

export const getPageInfo = (pageProps: any) => {
  const title =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - CodeCraft`;

  const description = pageProps.markdoc?.frontmatter.description || '';

  return { title, description };
};

export const getTableOfContents = (pageProps: any) => {
  return pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content.children)
    : [];
};
