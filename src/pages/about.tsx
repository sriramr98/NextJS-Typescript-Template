import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from 'next/link';

import Layout from 'components/layouts/AuthorizedLayout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Box>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Box>
  </Layout>
);

export default AboutPage;
