import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { AuthState, useAuth } from 'utils/hooks/useAuth';

const AuthDialog: React.FC = () => {
  const auth: AuthState = useAuth();
  const [isOpen, setOpen] = useState(!auth.user);
  const onLogin = async (): Promise<void> => {
    await auth.signInWithGoogle();
  };

  useEffect(() => setOpen(!auth.user), [auth.user]);

  const handleClose = (): void => {
    if (auth.user && isOpen) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Button onClick={onLogin} color="inherit">
          Login with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
