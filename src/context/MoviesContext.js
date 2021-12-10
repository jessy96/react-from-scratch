import { createContext } from "react";
import MoviesRepo from "../services/MovieService";

const MoviesContext = createContext(new  MoviesRepo);

export default MoviesContext;