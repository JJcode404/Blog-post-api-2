import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utilis/authContextapi";

function Navbar() {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const handleGoToBlogs = (e) => {
    e.preventDefault();

    // Check if user and token exist before proceeding
    if (!user || !token) {
      console.error("User or token not available");
      return;
    }

    // Use current token for redirection
    const blogUrl = `https://blogpost-author-panel.vercel.app/users/author/${
      user.id
    }?token=${encodeURIComponent(token)}`;

    // Option 1: Regular redirection
    window.location.href = blogUrl;
  };

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <div className="logo">★ WordFlux ★</div>
        </Link>
        <div className="separator"></div>
      </div>

      {user && (
        <div className="welcome-banner">
          <span>
            ✨ Welcome back,{" "}
            <span className="userName">
              {user.name || user.email || "Wordsmith"}
            </span>
            ! ✨
          </span>
        </div>
      )}

      <nav className="nav">
        <div className="left">
          <Link to={"pages/about"}>About</Link>
          <a href="mailto:khamjapher1@gmail.com">Contact</a>
          {user && token && (
            <a href="#" onClick={handleGoToBlogs}>
              My Blogs
            </a>
          )}
        </div>

        <div className="right">
          {user ? (
            <a
              className="logout"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logout();
                navigate("/");
              }}
            >
              logout
            </a>
          ) : (
            <span className="login end">
              <Link to="/account">login</Link>
            </span>
          )}
        </div>
      </nav>

      {/* Add custom CSS styles */}
      <style>{`
        .welcome-banner {
          text-align: center;
          font-family: monospace;
          font-size: 1.1em;
          margin: 10px 0 15px 0;
          padding: 6px 0;
          border-top: 1px dotted #ccc;
          border-bottom: 1px dotted #ccc;
        }
        
        .welcome-banner span {
          display: inline-block;
          animation: gentle-pulse 3s infinite alternate;
        }
        
        @keyframes gentle-pulse {
          from { transform: scale(1); }
          to { transform: scale(1.03); }
        }
        
        .right {
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .welcome-banner {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </header>
  );
}

export { Navbar };
