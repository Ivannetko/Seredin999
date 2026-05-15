import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Donat } from "./components/pages/Donat";
import { Videos } from "./components/pages/Videos";
import { Blog } from "./components/pages/Blog";
import { FissureBot } from "./components/pages/FissureBot";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "donat", Component: Donat },
      { path: "videos", Component: Videos },
      { path: "blog", Component: Blog },
      { path: "fissure-bot", Component: FissureBot },
      { path: "*", Component: NotFound },
    ],
  },
]);
