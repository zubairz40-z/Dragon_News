// src/components/Navbar.jsx
import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import avatarPlaceholder from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (e) {
     // console.error("Logout failed:", e);
    }
  };

  return (
    <header className="flex justify-between items-center py-3">
      <div className="text-sm text-slate-600">{user?.email}</div>

      <nav className="flex gap-5">
        <NavLink to="/" end className={({ isActive }) => isActive ? "font-semibold text-slate-900" : "text-slate-500"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold text-slate-900" : "text-slate-500"}>
          About
        </NavLink>
        <NavLink to="/career" className={({ isActive }) => isActive ? "font-semibold text-slate-900" : "text-slate-500"}>
          Career
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <img
          src={user?.photoURL || avatarPlaceholder}
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        {user ? (
          <button onClick={handleLogout} className="btn btn-outline">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
