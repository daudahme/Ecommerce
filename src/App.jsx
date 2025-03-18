import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MainDashboardpage from './pages/MainDashboardpage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './Context/UseFireBase';
import Stylishlogin from './pages/Stylishlogin';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className='flex justify-center items-center text-4xl my-56'>Loading...........</p>;

  return (
    <div className="flex justify-center items-center ">
      <Routes>
        {/* Redirect to Dashboard if user is logged in, otherwise show Login */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Stylishlogin />} />

        {/* Protected Route: Only logged-in users can access Dashboard */}
        <Route path="/dashboard" element={user ? <MainDashboardpage /> : <Navigate to="/" />} />
       
      </Routes>
    </div>
  );
};

export default App;
