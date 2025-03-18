import React, { useState } from "react";
import { signinwithEmail } from "../Context/UseFireBase";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../UI/toastMessage";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
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
    <div className="bg-white border-2 border-blue-500 p-8 h-[500px] shadow-2xl my-56 w-[400px] rounded-2xl">
      <div className="text-center text-4xl my-8">Ecommerce</div>
      <div className="text-2xl mb-6">Sign in to your account</div>
      <div className="flex flex-col gap-6">
        <label>Enter email</label>
        <input
          type="text"
          placeholder="Type here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 border-2 border-blue-200 focus:outline focus:outline-sky-500 focus:bg-blue-100 rounded-2xl"
        />

        <label>Enter Password</label>
        <div className="flex justify-between bg-blue-50 items-center border-2 rounded-2xl focus:bg-blue-100 border-blue-200 focus:outline focus:outline-sky-500 px-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-4 border-none outline-none w-full"
          />
          {showPassword ? (
            <IoEyeOff onClick={() => setShowPassword(false)} className="cursor-pointer text-gray-600" />
          ) : (
            <IoEye onClick={() => setShowPassword(true)} className="cursor-pointer text-gray-600" />
          )}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={SigninwithEmail}
          disabled={loading}
          className={`px-4 py-3 bg-blue-400 text-2xl text-white rounded-2xl shadow-2xl flex justify-center items-center gap-2 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-90 hover:bg-blue-300"
          }`}
        >
          <span>Signin</span>
          {loading && <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6"></span>}
        </button>
      </div>
    </div>
  );
};

export default Login;
