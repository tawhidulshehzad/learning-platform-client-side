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
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/classes/:id",
        element: <Classes></Classes>,
      },
    ],
  },
]);
