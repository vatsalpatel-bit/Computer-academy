import Branches from "@/components/student/home/Branches";
import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Home from "@/pages/Home";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<MainLayout />),
    children: [
      {
        index: true,
        element: (<Home />)
      },
      {
        path: "/about-us",
        element: (<About />)
      },
      {
        path: "/courses",
        element: (<Courses />)
      },
      {
        path: "/branches",
        element: (<Branches />)
      }
    ]
  }
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;