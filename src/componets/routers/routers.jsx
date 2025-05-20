import { HomePage } from "../../Pages/Home";
import { PostPage } from "../../Pages/PostPage";
import { AuthPage } from "../../Pages/AuthPage";
import { RootLayout } from "./rooteLayout";
import { AboutMe } from "../aboutme";
import { NotFound } from "../Notfound";
import { ErrorPage } from "../ErrorPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
      { path: "*", element: <NotFound /> },
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
  {
    path: "/serverError",
    element: <ErrorPage />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
];

export { routes };
