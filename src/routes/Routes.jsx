import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home.jsx';
import Blogs from '../pages/Blogs.jsx';
import Bookmarks from '../pages/Bookmarks.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Blog from '../pages/Blog.jsx';
import Content from '../components/Content.jsx';
import Author from '../components/Author.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=10'),
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      { path: '/bookmarks', element: <Bookmarks /> },
    ],
  },
]);
