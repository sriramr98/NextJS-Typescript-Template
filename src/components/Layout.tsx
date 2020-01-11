import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Box from '@material-ui/core/Box';

import Header from './common/Header';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'NextJS Boilerplate | Typescript',
}) => (
  <Box>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box>
      <Header />
      {children}
    </Box>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default Layout;
