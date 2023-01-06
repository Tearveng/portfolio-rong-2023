import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Newsletter from "./page/Newsletter";
import Project from "./page/Project";
import Home from "./page/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { blockContent } from "./lib/blockContent";
import LoadingBarJsx from "./components/Navbar/LodingBar";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return await blockContent(import.meta.env.VITE_NOTION_HOME_PAGE);
        },
      },
      { path: "newsletter", element: <Newsletter /> },
      { path: "project", element: <Project /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // </React.StrictMode>
);
