import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Classes from "../../Pages/Classes/Classes/Classes";
import Courses from "../../Pages/Courses/Courses/Courses";

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
          fetch(`http://localhost:5000/classes/${params.id})}`),
      },
    ],
  },
]);
