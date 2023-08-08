import ReactDOM from "react-dom/client"
import * as React from "react";
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HobbyPage from "./pages/HobbyPage";
import BookSummaryPage from "./pages/BookSummaryPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "blog",
        element: <BlogPage/>,
    },
    {
        path: "hobby",
        element: <HobbyPage/>,
    },
    {
        path: "book_summary",
        element: <BookSummaryPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);