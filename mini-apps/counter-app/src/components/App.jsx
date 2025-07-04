import { CounterProvider } from "../state/CounterContext";
import Counter from "./components/Counter";

function App() {
  return (
    <CounterProvider>
      <h2>useReducer × useContext アプリ 🔁🧠</h2>
      <Counter />
    </CounterProvider>
  );
}

export default App;
