import { Link } from "react-router-dom";
import { useFetch } from "../utilis/userFetch";
import { format } from "date-fns";
import styles from "../styles/ReadNext.module.css";
import Loader from "./Loader";

function ReadNext() {
  const { data, error, loading } = useFetch(
    `http://localhost:3000/posts/latest`
  );
  const latestPosts = data;

  if (error) {
    return (
      <p className={`${styles.centerText} ${styles.errorText}`}>
        {error.message}
      </p>
    );
  }

  return (
    <>
      {loading && <Loader />}
      <div className={styles.readNext}>
        <h1 className={styles.heading}>Read next</h1>
        <div className={styles.postList}>
          {latestPosts && latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <Link
                to={`/posts/${post.id}`}
                key={post.id}
                className={styles.postLink}
              >
                <div className={styles.postCard}>
                  <img
                    src={post.thumbnail}
                    alt="Post thumbnail"
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
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export { ReadNext };
