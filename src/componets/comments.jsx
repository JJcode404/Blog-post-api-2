import { useFetch } from "../utilis/userFetch";
import { format } from "date-fns";
function CommentSection({ blogId }) {
  let { data, error, loading } = useFetch(
    `http://localhost:3000/posts/${blogId}/comments`
  );
  let comments = data;
  console.log(comments);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }
  return (
    <section className="comments">
      <h2>Top comments ({comments.length})</h2>
      <div className="commentBox">
        <textarea placeholder="Add to the discussion"></textarea>
        <br />
        <button>Submit</button>
      </div>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="commentAuthor">
              {comment.user.name} •{" "}
              {format(new Date(comment.createdAt), "MMMM d")}
            </div>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No comments posted.</p>
      )}
    </section>
  );
}

export { CommentSection };
