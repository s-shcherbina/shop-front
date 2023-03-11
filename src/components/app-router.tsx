import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Admin from '../pages/admin';
import AuthRoot from '../pages/auth';
import Main from '../pages/main';
import PrivateRoute from '../utils/private-route';

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='/' element={<Main />} />
      <Route path='login' element={<AuthRoot />} />
      <Route path='register' element={<AuthRoot />} />
    </Routes>
  );
};

export default AppRouter;
