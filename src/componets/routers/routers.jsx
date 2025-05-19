import { HomePage } from "../../Pages/Home";
import { PostPage } from "../../Pages/PostPage";
import { AuthPage } from "../../Pages/AuthPage";
import { RootLayout } from "./rooteLayout";
import { AboutMe } from "../aboutme";
import { NotFound } from "../Notfound";

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
      {
        path: "pages/about",
        element: <AboutMe />,
      },
    ],
  },
  {
    path: "/account",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
