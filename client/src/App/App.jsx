import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
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
      }
    ]
  }
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;