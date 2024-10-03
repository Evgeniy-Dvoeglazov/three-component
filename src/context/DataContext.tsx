import { createContext } from "react";
import { IData } from "../types";

export const DataContext = createContext<IData[]>([]);
