import { Link } from "react-router-dom";
import { useFetch } from "../utilis/userFetch";
import { getFirstTwoParagraphs } from "../utilis/getParagraph";
import DOMPurify from "dompurify";
import Loader from "./Loader";

const PostList = () => {
  const { data, error, loading } = useFetch();

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <>
      {loading && <Loader />}
      {data && data.length > 0 ? (
        data
          .filter((post) => post.title && post.content)
          .map((post) => (
            <article className="blog" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h1 className="blog-title">{post.title}</h1>
              </Link>

              <div className="dotteddiv">
                <div className="dotted-line"></div>
                <div className="dotted-line"></div>
              </div>

              <div className="meta">
                {new Date(post.createdAt).toLocaleDateString()} ::{" "}
                <span className="author userName">
                  {post.author?.name || "Unknown Author"}
                </span>
              </div>
              <div className="tags">
                {post.tags?.map((tag, index) => (
                  <span key={index}>#{tag.name}</span>
                ))}
              </div>

              {/* Blog Image */}
              <div className="blog-image-wrapper">
                <img
                  src={post.thumbnail}
                  alt="Blog Preview"
                  className="blog-image"
                />
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    getFirstTwoParagraphs(post.content)
                  ),
                }}
              />
              <div className="readmore">
                <Link to={`posts/${post.id}`}>Read more →</Link>
              </div>
            </article>
          ))
      ) : (
        <p style={{ textAlign: "center" }}>No posts available.</p>
      )}
    </>
  );
};

export { PostList };
