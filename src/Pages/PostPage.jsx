import { useParams } from "react-router-dom";
import { Blog } from "../componets/blog";
import { Footer } from "../componets/footer.";
import { Navbar } from "../componets/navbar";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Navbar />
      <Blog blogId={id} />
      <Footer />
    </div>
  );
};
export { PostPage };
