import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project.jsx";
import Contact from "./pages/Contact/Contact";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects/:projectId", element: <Project /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
