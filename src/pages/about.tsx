import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import Layout from 'components/layouts/AuthorizedLayout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Box>
      <Typography variant="h4">About</Typography>
      <Typography variant="caption">This is the about page</Typography>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </Box>
  </Layout>
);

export default AboutPage;
