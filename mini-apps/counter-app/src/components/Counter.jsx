// カウントUIを作成

import { useContext } from "react";
import { CounterContex } from "../state/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContex);

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "1px solid #ccc",
        textAlign: "center",
      }}
    >
      <h2>現在のカウント： {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        -1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        +1
      </button>
    </div>
  );
};
export default Counter;
