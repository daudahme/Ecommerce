import React from 'react'
import { signout } from '../Context/UseFireBase'
import { useNavigate } from 'react-router-dom'
import { toastMessage } from '../UI/toastMessage'

const MainDashboardpage = () => {
  const navigate = useNavigate()
  const Signout =async()=>{
     await signout()
     navigate("/")
     toastMessage("Logout successfully");
  }
  return (
    <div className='flex justify-center items-center my-5'>
      <button className='bg-blue-200 px-4 py-4 rounded-4xl text-2xl hover:scale-90 shadow-2xl' onClick={Signout}>Signout</button>
    </div>
  )
}

export default MainDashboardpage
