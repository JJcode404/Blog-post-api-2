import { useParams } from "react-router-dom";
import { Blog } from "../componets/blog";
import { Footer } from "../componets/footer.";
import { Navbar } from "../componets/navbar";
import { ReadNext } from "../componets/readNext";
import { CommentSection } from "../componets/comments";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Navbar />
      <Blog blogId={id} />
      <CommentSection blogId={id} />
      <ReadNext blogId={id} />
      <Footer />
    </div>
  );
};
export { PostPage };
