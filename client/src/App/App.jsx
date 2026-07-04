import Branches from "@/components/student/home/Branches";
import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CourseDetails from "@/pages/CourseDetails";
import Courses from "@/pages/Courses";
import Enquiry from "@/pages/Enquiry";
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
      },
      {
        path: "/contact",
        element: (<Contact />)
      },
      {
        path: "/enquiry",
        element: (<Enquiry />)
      },
      {
        path: "/course-detail/:slug",
        element: (<CourseDetails />)
      }
    ]
  }
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;