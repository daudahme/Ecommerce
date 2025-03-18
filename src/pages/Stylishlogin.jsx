import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signinwithEmail } from '../Context/UseFireBase';
import { toastMessage } from '../UI/toastMessage';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Stylishlogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("admin@admin.com");
    const [password, setPassword] = useState("adminadmin");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const SigninwithEmail = async () => {
      setLoading(true);
      try {
        await signinwithEmail(email, password);
        toastMessage("Welcome to admin", "success");
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } catch (error) {
        toastMessage("Invalid credentials", "error");
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className='flex justify-between items-center gap-80'>
     <div className='form border-blue-300 border-2 shadow-2xl w-[420px] rounded-2xl ml-72 '>
        <div className='pt-16 pl-16 pr-96  text-2xl text-blue-500 font-bold '>
            Ecommerce
        </div>
        <div className='px-14'>

      <div className='pt-14 mb-3 '>
      Welcome back !!!
      </div>
      <div className='text-2xl font-semibold text-blue-500 mb-3'>
      Sign in
      </div>
      <div className='mb-4'> 
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</fieldset>
      </div>
      <div>
      <fieldset className="relative   rounded-lg">
    
      
      <div className="relative">
      <legend className="fieldset-legend">Password</legend>
      <input   type={showPassword ? "text" : "password"} className="input w-full" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        {/* Eye Icon inside input field */}
        <span
          className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOff size={16} /> : <IoEye size={16} />}
        </span>
      </div>
    </fieldset>
      </div>
      <div>
      <button
          onClick={SigninwithEmail}
          disabled={loading}
          className={`mt-8 mb-8 w-full  px-4 py-3 bg-blue-400 text-2xl text-white rounded-2xl shadow-2xl flex justify-center items-center gap-2 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-90 hover:bg-blue-300"
          }`}
        >
          <span>Signin</span>
          {loading && <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6"></span>}
        </button>
      </div>
        </div>
     </div>
     <div className='right'>
        <div className='bg-blue-200 w-[600px] h-screen ml-52  '>
          
        </div>
     </div>
    </div>
  )
}

export default Stylishlogin
