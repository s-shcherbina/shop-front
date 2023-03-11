import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './login';

import { instance } from '../../utils/axios';
import { IPhoneMask, ILocal } from '../../types';
import Register from './register';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../utils/hooks';
import { login } from '../../store/slices/auth';

const AuthRoot: FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<IPhoneMask>({
    textmask: '',
  });
  const [name, setName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [form, setForm] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/login') {
      const loginData = { email, password };
      try {
        const user = await instance.post('auth/login_su', loginData);
        // console.log(user.data, user.data.userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (e: any) {
        console.error(e.response.data.message);
      }
    }
    if (location.pathname === '/register') {
      if (!form) {
        const loginPhone = { phone: values.textmask };
        try {
          const user = await instance.post('auth/login', loginPhone);
          console.log(user.data, user.data.userData);
          setDelivery(user.data.userData.delivery);
          setLocality(user.data.userData.locality);
          setDepartment(user.data.userData.department);
          setName(user.data.userData.name);
          if (
            user.data.userData.role.slice(-1) === 'S' ||
            user.data.userData.role.slice(-1) === 'A'
          )
            console.error(`${user.data.userData.phone} вже існує.Увійдіть!`);
        } catch (e: any) {
          console.error(e.response.data.message);
        }
      }
      const registerData = {
        phone: values.textmask,
        name,
        department,
        locality: locality?.label ? locality.label : locality,
        delivery,
        email,
        password,
      };
      if (form) {
        if (password === confirmPassword) {
          try {
            const newUser = await instance.post(
              'auth/register_su',
              registerData
            );
            // console.log(newUser.data, newUser.data.userData);
            dispatch(login(newUser.data));
            navigate('/');
          } catch (e: any) {
            console.error(e.response.data.message);
          }
        } else {
          // throw new Error(AppErrors);
          console.error('Паролі не співпали');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        maxWidth={640}
        borderRadius={5}
        sx={{ m: 'auto', p: 5, mt: 5 }}
        boxShadow={'-3px -2px 20px 1px #202020'}
      >
        {location.pathname === '/login' ? (
          <Login
            setEmail={setEmail}
            setPassword={setPassword}
            navigate={navigate}
          />
        ) : location.pathname === '/register' ? (
          <Register
            name={name}
            setName={setName}
            setDelivery={setDelivery}
            setLocality={setLocality}
            setDepartment={setDepartment}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setValues={setValues}
            values={values}
            delivery={delivery}
            locality={locality}
            department={department}
            navigate={navigate}
            setForm={setForm}
          />
        ) : null}
      </Box>
    </form>
  );
};

export default AuthRoot;
