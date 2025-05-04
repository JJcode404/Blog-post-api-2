import { Link } from "react-router-dom";
import { useAuth } from "../utilis/authContextapi";
import { useState } from "react";

function Navbar() {
  const { user } = useAuth();
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
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Cool Websites</a>
        </div>
        ``
        {user ? (
          <span className="welcome end">
            Welcome 👋{user.user.name || user.user.email || "User"}🎉
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
