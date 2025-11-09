// src/Pages/Register.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/";   // go where user came from (or home)

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password); // create account
      const user = result.user;
      await updateUserProfile({ displayName: name, photoURL: photo }); // update profile
      setUser({ ...user, displayName: name, photoURL: photo });        // sync local
      navigate(redirectTo, { replace: true });                         // redirect
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center py-5">Register your account</h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-primary font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              className="input input-bordered w-full"
              required
            />

            {/* Photo URL */}
            <label className="label text-primary font-semibold">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              placeholder="https://example.com/your-photo.jpg"
              className="input input-bordered w-full"
              pattern="https?://.+"
            />

            {/* Email */}
            <label className="label text-primary font-semibold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input input-bordered w-full"
              required
            />

            {/* Password */}
            <label className="label text-primary font-semibold">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            {/* Terms */}
            <div className="py-3">
              <label className="label cursor-pointer">
                <input type="checkbox" required className="checkbox" />
                <span className="ml-2">
                  Accept <span className="text-primary font-semibold">Terms & Conditions</span>
                </span>
              </label>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" className="btn btn-primary mt-4 w-full">Register</button>

            <p className="text-center font-semibold text-primary py-2">
              Already Have An Account?{" "}
              <Link to="/auth/login"><span className="text-secondary">Login</span></Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
