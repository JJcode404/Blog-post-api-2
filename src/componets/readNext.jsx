import { Link } from "react-router-dom";
import { useFetch } from "../utilis/userFetch";
import { format } from "date-fns";
import styles from "../styles/ReadNext.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { optimizeCloudinaryImage } from "../utilis/optimizeImage";

function ReadNext() {
  const { data, error, loading } = useFetch(
    `https://blog-post-api-posm.onrender.com/posts/latest`
  );
  const latestPosts = data;

  if (error) {
    return (
      <p className={`${styles.centerText} ${styles.errorText}`}>
        {error.message}
      </p>
    );
  }

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className={styles.postCard}>
        <div className={styles.thumbnailWrapper}>
          <Skeleton
            height={80}
            width={80}
            style={{ borderRadius: "10px" }}
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.postDetails}>
          <div style={{ width: "100%" }}>
            <Skeleton height={20} width="80%" />
            <Skeleton height={15} width="60%" style={{ marginTop: "0.5rem" }} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.readNext}>
      <h1 className={styles.heading}>Read next</h1>
      <div className={styles.postList}>
        {loading && renderSkeletons()}
        {!loading && latestPosts && latestPosts.length > 0
          ? latestPosts.map((post) => (
              <Link
                to={`/posts/${post.id}`}
                key={post.id}
                className={styles.postLink}
              >
                <div className={styles.postCard}>
                  <img
                    src={optimizeCloudinaryImage(post.thumbnail)}
                    alt="Post thumbnail"
                    loading="lazy"
                    className={styles.thumbnail}
                  />
                  <div className={styles.postDetails}>
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.authorDate}>
                      {post.author.name} –{" "}
                      {format(new Date(post.createdAt), "MMMM d")}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : !loading && <p>No posts available.</p>}
      </div>
    </div>
  );
}

export { ReadNext };
