import { createBrowserRouter } from "react-router-dom";
import { CreatePokemonPage, PokemonsPage } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PokemonsPage />,
  },
  {
    path: "/create",
    element: <CreatePokemonPage />,
  },
]);
