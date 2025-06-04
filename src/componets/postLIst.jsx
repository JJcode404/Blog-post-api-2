import { Link } from "react-router-dom";
import { useFetch } from "../utilis/userFetch";
import { getFirstTwoParagraphs } from "../utilis/getParagraph";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // import the CSS
import { optimizeCloudinaryImage } from "../utilis/optimizeImage";

const PostList = () => {
  const { data, error, loading } = useFetch();

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  const renderSkeleton = () => {
    return Array.from({ length: 3 }).map((_, idx) => (
      <article className="blog" key={idx}>
        <Skeleton height={30} width={`60%`} />
        <div className="dotteddiv">
          <div className="dotted-line"></div>
          <div className="dotted-line"></div>
        </div>
        <Skeleton width={200} height={15} style={{ marginBottom: "10px" }} />
        <Skeleton width={300} height={20} />
        <div className="tags">
          <Skeleton width={80} height={20} inline />
          <Skeleton
            width={60}
            height={20}
            inline
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div className="blog-image-wrapper">
          <Skeleton height={200} />
        </div>
        <Skeleton count={3} />
        <div className="readmore">
          <Skeleton width={100} height={20} />
        </div>
      </article>
    ));
  };

  return (
    <>
      {loading && renderSkeleton()}

      {!loading && data && data.length > 0
        ? data
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

                <div className="blog-image-wrapper">
                  <img
                    src={optimizeCloudinaryImage(post.thumbnail)}
                    alt="Blog Preview"
                    loading="lazy"
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
        : !loading && (
            <p style={{ textAlign: "center" }}>No posts available.</p>
          )}
    </>
  );
};

export { PostList };
