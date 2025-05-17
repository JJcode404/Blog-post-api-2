import { Link } from "react-router-dom";
import { useAuth } from "../utilis/authContextapi";

function Navbar() {
  const { user, logout, token } = useAuth();
  const handleGoToBlogs = () => {
    window.location.href = `http://localhost:5174/users/author/${user.id}?token=${token}`;
  };

  if (user) {
    console.log(token);
    console.log(user.id);
  }

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
          {user && token && <a onClick={handleGoToBlogs}>My Blogs</a>}
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
