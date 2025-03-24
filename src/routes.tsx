import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./page/About";
import Home from "./page/Home";
import Anime from "./page/Anime";
import SingleAnime from "./page/SingleAnime";
import Characters from "./page/Characters";
import SingleCharacter from "./page/SingleCharacter";
import VideoPage from "./page/VideoPage";

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
        element: <Anime />,
      },
      {
        path: '/anime/:id',
        element: <SingleAnime />
      },
      {
        path: '/anime/:id/video/:video',
        element: <VideoPage />
      },
      {
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/characters/:id',
        element: <SingleCharacter />
      },
    ]
  },

])