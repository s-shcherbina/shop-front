import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsLogin } from '../../types';

const Login: FC<IPropsLogin> = ({
  setEmail,
  setPassword,
  navigate,
}): JSX.Element => {
  return (
    <Stack spacing={3}>
      <Typography variant='h4' textAlign='center'>
        Авторизація
      </Typography>

      <TextField
        variant='standard'
        label='E-mail'
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        // type='password'
        variant='standard'
        label='Пароль'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Stack alignItems={'center'}>
        <Button
          sx={{
            borderRadius: 5,
            width: { xs: '100%', sm: '60%' },
            mt: 2,
            mb: 2,
          }}
          size='large'
          // loading={loading}
          type='submit'
          variant='contained'
        >
          Авторизуватися
        </Button>
        <Typography variant='body1'>
          Немає аккаунту?
          <Button onClick={() => navigate('/register')}>Реєстрація</Button>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
