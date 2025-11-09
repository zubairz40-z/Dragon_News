// src/Pages/Login.jsx
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);         // ✅ get signIn from context
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";           // ✅ go back where user tried to go

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true });              // ✅ redirect to original page
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center">Login your account</h2>

        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-primary font-semibold">Email</label>
            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />

            <label className="label text-primary font-semibold">Password</label>
            <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />

            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

            <div>
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary mt-4 w-full">Login</button>

            <p className="text-center font-semibold text-primary py-2">
              Don't Have An Account?{" "}
              <Link to="/auth/register"><span className="text-secondary">Register</span></Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Login;
