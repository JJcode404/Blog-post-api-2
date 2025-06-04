import { useFetch } from "../utilis/userFetch";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { optimizeCloudinaryImage } from "../utilis/optimizeImage";

function Blog({ blogId }) {
  const { data, error, loading } = useFetch(
    `https://blog-post-api-posm.onrender.com/posts/${blogId}`
  );

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  const renderSkeleton = () => (
    <article className="blog">
      <Skeleton height={30} width="60%" />
      <div className="dotteddiv">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Skeleton width={200} height={15} style={{ marginBottom: "10px" }} />
      <Skeleton width={300} height={20} />
      <div className="tags">
        <Skeleton width={80} height={20} inline />
        <Skeleton width={60} height={20} inline style={{ marginLeft: "5px" }} />
      </div>
      <div className="blogimage">
        <Skeleton height={250} />
      </div>
      <Skeleton count={6} />
    </article>
  );

  return (
    <>
      {loading && renderSkeleton()}

      {!loading && data && (
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
            <img
              src={optimizeCloudinaryImage(data.thumbnail)}
              alt="blog image"
              loading="lazy"
            />
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
