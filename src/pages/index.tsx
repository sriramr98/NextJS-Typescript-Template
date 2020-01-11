import * as React from 'react';
import Layout from 'components/Layout';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Faker API">
      <Box display="flex" justifyContent="center" alignItems="center" py={2}>
        <Typography variant="h2">Projects</Typography>
      </Box>
    </Layout>
  );
};

export default IndexPage;
