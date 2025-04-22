import "./index.css";
import { usePostURL } from "./utilis/postUrljsx";

const App = () => {
  const { data, error, loading } = usePostURL();

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="logo">★ WordFlux ★</div>
          <div className="separator"></div>
        </div>
        <nav className="nav">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Cool Websites</a>
        </nav>
      </header>

      {/* Blog Posts */}
      {data && data.length > 0 ? (
        data
          .filter((post) => post.title && post.content)
          .map((post) => (
            <article className="blog" key={post.id}>
              <h1 className="blog-title">{post.title}</h1>
              <div className="dotteddiv">
                <div className="dotted-line"></div>
                <div className="dotted-line"></div>
              </div>

              <div className="meta">
                {new Date(post.createdAt).toLocaleDateString()} ::{" "}
                <span className="author">
                  {post.author?.name || "Unknown Author"}
                </span>
              </div>
              <div className="tags">
                <span>#tech</span>
                <span>#self-hosting</span>
              </div>

              {/* Blog Image */}
              <div className="blog-image-wrapper">
                <img
                  src="./screen.png"
                  alt="Blog Preview"
                  className="blog-image"
                />
              </div>
              <div className="content">
                <p>{post.content.slice(0, 300)}...</p>
              </div>
              <div className="readmore">
                <a href="#">Read more →</a>
              </div>
              <hr />
            </article>
          ))
      ) : (
        <p style={{ textAlign: "center" }}>No posts available.</p>
      )}
    </div>
  );
};

export default App;
