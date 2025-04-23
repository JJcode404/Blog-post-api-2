import { HomePage } from "../../Pages/Home";
import { PostPage } from "../../Pages/PostPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "posts/:id",
    element: <PostPage />,
  },
];

export { routes };
