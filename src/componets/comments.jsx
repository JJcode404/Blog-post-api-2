// CommentSection.jsx

import { useState, useEffect } from "react";
import { useAuth } from "../utilis/authContextapi";
import { usePostReq } from "../utilis/usePostReq";
import { useFetch } from "../utilis/userFetch";
import { format } from "date-fns";

function CommentBox({ blogId, onNewComment }) {
  const { error, loading, postData } = usePostReq();
  const { user } = useAuth();
  const [content, setContent] = useState("");

  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      if (content) {
        const newComment = await postData(
          `http://localhost:3000/posts/${blogId}/comments`,
          {
            content,
            userId: user.id,
          }
        );
        console.log(
          "here is the new comment data from new comment",
          newComment
        );
        setContent("");

        // Add new comment to list
        if (onNewComment) onNewComment(newComment);
      }
    } catch (err) {
      console.error("Failed to post comment:", err);
    }
  };

  return (
    <div className="commentBox">
      <form onSubmit={handlePostComment}>
        <textarea
          placeholder="Add to the discussion"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        {loading && <p>Commenting...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

function CommentSection({ blogId }) {
  const { user } = useAuth();
  const { data, error, loading } = useFetch(
    `http://localhost:3000/posts/${blogId}/comments`
  );

  const [comments, setComments] = useState([]);

  // When fetch completes, set the comments
  useEffect(() => {
    if (data) setComments(data);
  }, [data]);

  const handleNewComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <section className="comments">
      <h2>Top comments ({comments.length})</h2>
      <CommentBox blogId={blogId} onNewComment={handleNewComment} />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="commentAuthor">
              {comment.user?.name || "Anonymous"} •{" "}
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
