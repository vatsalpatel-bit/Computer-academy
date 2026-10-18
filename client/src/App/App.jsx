import Branches from '@/pages/Branches';
import MainLayout from '@/layout/MainLayout';
import Contact from '@/pages/Contact';
import CourseDetails from '@/pages/CourseDetails';
import Courses from '@/pages/Courses';
import Home from '@/pages/Home';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/branches',
        element: <Branches />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/course-detail/:slug',
        element: <CourseDetails />,
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
