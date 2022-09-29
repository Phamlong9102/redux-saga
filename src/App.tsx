import React, { useEffect } from 'react';
import cityApi from './api/cityApi';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { AdminLayout } from './components/Layout';
import { NotFound } from './components/common';
import './index.css'; 
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  });

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(authActions.logout())} className="w-[100px] h-[40px] bg-black text-white">Log out</button>
      </div>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
