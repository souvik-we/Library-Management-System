import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice"; // your slice
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { isLoggedIn, loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      loginUser({ roll_number: data.username, password: data.password })
    );
  };

  // Redirect if already logged in
  if (isLoggedIn) return <Navigate to="/home" />;

  return (
    <div className="bg-blue-200 p-1 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-500 font-bold text-2xl uppercase mb-10">
          Login
        </h2>

        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                {...register("username", { required: "Username is required" })}
                className="border text-black border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 4, message: "Minimum 4 characters" },
                })}
                className="border text-black border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Button */}
            <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-lg">
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Display error from Redux */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;