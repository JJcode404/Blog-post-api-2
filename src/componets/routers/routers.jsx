import { HomePage } from "../../Pages/Home";
import { PostPage } from "../../Pages/PostPage";
import { AuthPage } from "../../Pages/AuthPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "posts/:id",
    element: <PostPage />,
  },
  {
    path: "/account",
    element: <AuthPage />,
  },
];

export { routes };
