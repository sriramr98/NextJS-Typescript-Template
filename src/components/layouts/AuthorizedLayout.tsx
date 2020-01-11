import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Box from '@material-ui/core/Box';

import Header from 'components/common/Header';
import AuthDialog from 'components/common/AuthDialog';
import { AuthState, useAuth } from 'utils/hooks/useAuth';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const AuthorizedLayout: React.FunctionComponent<Props> = ({
  children,
  title = 'NextJS Boilerplate | Typescript',
}) => {
  const auth: AuthState = useAuth();
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        {auth.user && <Header />}
        {children}
        <AuthDialog />
      </Box>
    </Box>
  );
};

AuthorizedLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default AuthorizedLayout;
