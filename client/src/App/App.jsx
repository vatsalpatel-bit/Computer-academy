import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: "main layout",
    children: [
      {
        index: true,
        element: ("home")
      },
      {

      }
    ]
  }
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;