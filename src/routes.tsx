import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./page/About";
import Home from "./page/Home";
import Anime from "./page/Anime";
import SingleAnime from "./page/SingleAnime";
import Characters from "./page/Characters";
import SingleCharacter from "./page/SingleCharacter";
import AllAnime from "./page/AllAnime";
import CurrentAnime from "./page/CurrentAnime";
import TopAnime from "./page/TopAnime";
import AnimeUpcoming from "./page/AnimeUpcoming";
import RecommendationAnime from "./page/RecommondationAnime";
import NotFound from "./page/NotFound";

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
        children: [
          {
            index: true,
            element: <AllAnime />
          },
          {
            path: 'current',
            element: <CurrentAnime />
          },
          {
            path: 'upcoming',
            element: <AnimeUpcoming />
          },
          {
            path: 'top',
            element: <TopAnime />
          },
          {
            path: 'recommendation',
            element: <RecommendationAnime />
          }
        ]
      },
      {
        path: '/anime/:id',
        element: <SingleAnime />
      },
      {
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/characters/:id',
        element: <SingleCharacter />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },

])