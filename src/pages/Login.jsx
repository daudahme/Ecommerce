import React, { useState } from 'react'
import { signinwithEmail } from '../Context/UseFireBase'
import { useNavigate } from 'react-router-dom'
import { toastMessage } from '../UI/toastMessage'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const SigninwithEmail=async()=>{
    try {
      await signinwithEmail(email,password)
      toastMessage("Logout successfully");
      setEmail("")
      setPassword("")
      navigate("/dashboard")
    } catch (error) {
      toastMessage("Invalid credentials","error");
    }
   
  }
  return (
    <div className='bg-white border-2 border-blue-500 px-4  h-[400px]  shadow-2xl my-56 w-[500px] rounded-2xl'>
        <div className='text-center text-4xl mb-6'> 
            Ecommerce
        </div>
        <div className=' text-2xl mb-6'> 
            Sign in to your account
        </div>
        <div className='flex flex-col gap-3'>
        <label>Enter email</label>
      <input type="text" placeholder="Type here" value={email} onChange={(e)=>setEmail(e.target.value)} 
      className="input py-2 px-4 border-2 border-blue-200  focus:outline focus:outline-sky-500 focus:bg-blue-100 rounded-2xl" />
      <label>Enter Password</label>
      <input type="text" placeholder="Type here" value={password} onChange={(e)=>setPassword(e.target.value)} 
      className="input py-2 px-4 border-2 border-blue-200  focus:outline focus:outline-sky-500 rounded-2xl focus:bg-blue-100"  />
        </div>
        <div className='flex justify-center items-center mt-4'>
            <button onClick={SigninwithEmail} className='px-4 py-3 bg-blue-400 text-2xl text-white rounded-2xl shadow-2xl hover:scale-90 hover:bg-blue-300'>
                Signin
            </button>
        </div>
    </div>
  )
}

export default Login
