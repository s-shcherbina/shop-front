import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Delivery from '../../components/delivery';
import PhoneFormat from '../../components/helpers/phone-fotmat';
import { IPropsRegister } from '../../types';

const Register: FC<IPropsRegister> = ({
  name,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  delivery,
  setDelivery,
  locality,
  setLocality,
  department,
  setDepartment,
  values,
  setValues,
  navigate,
  setForm,
}): JSX.Element => {
  const [formPhone, setFormPhone] = useState(false);

  return (
    <Stack spacing={2}>
      <Typography variant='h4' textAlign='center'>
        Реєстрація
      </Typography>
      <PhoneFormat values={values} setValues={setValues} />
      {formPhone && (
        <>
          <TextField
            value={name}
            size='small'
            variant='standard'
            label='Ім`я, прізвище'
            onChange={(e) => setName(e.target.value)}
          />
          <Delivery
            delivery={delivery}
            setDelivery={setDelivery}
            locality={locality}
            setLocality={setLocality}
            department={department}
            setDepartment={setDepartment}
          />

          <TextField
            size='small'
            variant='standard'
            label='E-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            size='small'
            variant='standard'
            label='Пароль'
            // type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            size='small'
            variant='standard'
            label='Підтвердження пароля'
            // type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      )}
      <Stack alignItems={'center'}>
        <Button
          sx={{
            borderRadius: 5,
            width: { xs: '100%', sm: '60%' },
            mt: 1,
            mb: 1,
          }}
          // loading={loading}
          type='submit'
          variant='contained'
          onClick={() => (!formPhone ? setFormPhone(true) : setForm(true))}
        >
          {formPhone ? 'Peєстрацiя' : 'Далі'}
        </Button>
        <Typography variant='body1'>
          Зареєстровані?
          <Button
            size='small'
            sx={{ borderRadius: 5 }}
            onClick={() => navigate('/login')}
          >
            Вхід
          </Button>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;
