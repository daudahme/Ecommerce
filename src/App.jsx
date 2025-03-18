import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainDashboardpage from './pages/MainDashboardpage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './Context/UseFireBase';
import ResponsiveForm from './pages/ResponsiveForm';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className='flex justify-center items-center text-4xl my-56'>Loading...........</p>;

  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <ResponsiveForm />} />
        <Route path="/dashboard" element={user ? <MainDashboardpage /> : <Navigate to="/" />} />
   
       
      </Routes>
    </div>
  );
};

export default App;
