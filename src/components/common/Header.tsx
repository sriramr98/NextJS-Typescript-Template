import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAuth, AuthState } from 'utils/hooks/useAuth';
import Link from 'next/link';

const Header: React.FC = () => {
  const auth: AuthState = useAuth();

  const onLogout = async (): Promise<void> => {
    await auth.signout();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Faker API</Typography>
        <Box ml="auto">
          {auth.user && (
            <Button onClick={onLogout} color="inherit">
              Logout
            </Button>
          )}
          <Link href="/about">
            <Button>About</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
