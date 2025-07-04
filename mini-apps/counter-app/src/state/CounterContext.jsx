// useReducer＋Contextの定義

import { createContext, useReducer } from "react";

export const CounterContex = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <CounterContex.Provider value={{ state, dispatch }}>
      {children}
    </CounterContex.Provider>
  );
};
