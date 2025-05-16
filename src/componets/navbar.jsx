import { Link } from "react-router-dom";
import { useAuth } from "../utilis/authContextapi";
import { useState } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <div className="logo">★ WordFlux ★</div>
        </Link>

        <div className="separator"></div>
      </div>
      <nav className="nav">
        <div className="left">
          <Link to={"pages/about"}>About</Link>
          <a href="mailto:khamjapher1@gmail.com">Contact</a>
          {user && (
            <a href={`http://localhost:5173/users/author/${user.id}`}>
              My Blogs
            </a>
          )}
        </div>
        {user ? (
          <span className="welcome end">
            👋Welcome back,{user.name || user.email || "User"} |{" "}
            <a className="logout" onClick={logout}>
              logout
            </a>
          </span>
        ) : (
          <span className="login end">
            <Link to="/account">login</Link>
          </span>
        )}
      </nav>
    </header>
  );
}

export { Navbar };
