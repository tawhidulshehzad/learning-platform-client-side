import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Classes from "../../Pages/Classes/Classes/Classes";
import Courses from "../../Pages/Courses/Courses/Courses";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Premium from "../../Pages/Premium/Premium";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import Page404 from "../../Pages/Page404/Page404";
import AskQuestion from "../../AskQuestion/AskQuestion";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/classes"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/classes/:id",
        element: <Classes></Classes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <AskQuestion></AskQuestion>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Premium></Premium>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      {
        path: "/*",
        element: <Page404></Page404>,
      },
    ],
  },
]);
