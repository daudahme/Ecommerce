import React, { useState } from "react";
import { signinwithEmail } from "../Context/UseFireBase";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../UI/toastMessage";
import { IoEye, IoEyeOff } from "react-icons/io5";
import cartformright from "../assets/cartformright.png";

const ResponsiveForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="flex flex-col lg:flex-row h-screen">
  
      <div className="w-full flex items-center justify-center px-6 sm:px-4">
        <div className="border-2 border-blue-200 shadow-xl max-w-md w-full sm:w-[320px] md:w-[400px] lg:w-[480px] rounded-2xl p-6 sm:p-4">
          <div className="text-center text-2xl text-blue-500 font-bold">Ecommerce</div>

          <div className="px-6 sm:px-2">
            <div className="pt-8 mb-3 text-center">Welcome back !!!</div>
            <div className="text-2xl font-semibold text-blue-500 mb-3 text-center">Sign in</div>

            <div className="mb-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Email</legend>
                <input
                  type="text"
                  className="input w-full focus:outline focus:outline-blue-400 border-2 border-blue-200 hover:bg-blue-50 p-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
            </div>

            {/* Password Input */}
            <div>
              <fieldset className="relative rounded-lg">
                <legend className="fieldset-legend">Password</legend>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full hover:bg-blue-50 border-2 border-blue-200 focus:outline focus:outline-blue-400 p-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* Eye Icon (Toggle Password) */}
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
                  </span>
                </div>
              </fieldset>
            </div>

          
            <div>
              <button
                onClick={SigninwithEmail}
                disabled={loading}
                className={`mt-6 w-full px-4 py-3 bg-blue-400 text-2xl text-white rounded-2xl shadow-2xl flex justify-center items-center gap-2 transition-all ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:scale-95 hover:bg-blue-300"
                }`}
              >
                <span>Signin</span>
                {loading && <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6"></span>}
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden lg:flex w-full h-screen bg-blue-50 items-center justify-center">
        <img src={cartformright} alt="Shopping Cart" className="max-h-[200px] md:max-h-[250px] lg:max-h-[300px]" />
      </div>
    </div>
  );
};

export default ResponsiveForm;
