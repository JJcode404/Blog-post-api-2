import { useFetch } from "../utilis/userFetch";
import { format } from "date-fns";
function ReadNext() {
  let { data, error, loading } = useFetch(`http://localhost:3000/posts/latest`);
  let latestPosts = data;

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>;
  }
  return (
    <>
      <div className="readNext">
        <h1>Read next</h1>
        <div className="bloglist11">
          {latestPosts && latestPosts.length > 0 ? (
            latestPosts.map((latestPost) => (
              <div className="blog11" key={latestPost.id}>
                <img src="/vite.svg" alt="" />
                <div className="blogdetails">
                  <div className="blog-title11">{latestPost.title}</div>
                  <div className="blog-autherDate">
                    {latestPost.author.name} -{" "}
                    {format(new Date(latestPost.createdAt), "MMMM d")}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No latest Posts.</p>
          )}
        </div>
      </div>
    </>
  );
}
export { ReadNext };
