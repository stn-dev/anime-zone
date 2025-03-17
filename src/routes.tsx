import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./page/About";
import Home from "./page/Home";
import Anime from "./page/Anime";
import Contact from "./page/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/anime',
        element: <Anime />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },

])