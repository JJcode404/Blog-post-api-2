import { HomePage } from "../../Pages/Home";
import { PostPage } from "../../Pages/PostPage";
import { AuthPage } from "../../Pages/AuthPage";
import { RootLayout } from "./rooteLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts/:id",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/account",
    element: <AuthPage />,
  },
];

export { routes };
