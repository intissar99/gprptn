import { useEffect, useReducer, createContext, React } from "react";
import Reducers from "./Reducers";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  admin: JSON.parse(localStorage.getItem("admin")) || null,

  isFetching: false,
  error: false,
};
export const Context = createContext(initialState);
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducers, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else if (state.admin) {
      localStorage.setItem("admin", JSON.stringify(state.admin));
    }
  }, [state.user, state.admin]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}


