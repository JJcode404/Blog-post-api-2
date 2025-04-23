import "../index.css";
import { Navbar } from "../componets/navbar";
import { Footer } from "../componets/footer.";
import { PostList } from "../componets/postLIst";
const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <PostList />
      <Footer />
    </div>
  );
};

export { HomePage };
