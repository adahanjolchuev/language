import { createStore } from "redux";
import Reducer from "./action";

export const store = createStore(Reducer);
