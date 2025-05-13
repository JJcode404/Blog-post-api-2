import { useFetch } from "../utilis/userFetch";
import DOMPurify from "dompurify";

function Blog({ blogId }) {
  const { data, error, loading } = useFetch(
    `http://localhost:3000/posts/${blogId}`
  );

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <>
      {data && (
        <article className="blog" key={data.id}>
          <h1 className="blog-title">{data.title}</h1>

          <div className="dotteddiv">
            <div className="dotted-line"></div>
            <div className="dotted-line"></div>
          </div>

          <div className="meta">
            {new Date(data.createdAt).toLocaleDateString()} ::{" "}
            <span className="author">
              {data.author?.name || "Unknown Author"}
            </span>
          </div>

          <div className="tags">
            {data.tags?.map((tag, index) => (
              <span key={index}>#{tag.name}</span>
            ))}
          </div>
          <div className="blogimage">
            <img src={data.thumbnail} alt="blog image" />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.content),
            }}
          />
        </article>
      )}
    </>
  );
}

export { Blog };
