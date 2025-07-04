# 🧠 useReducer × useContext カウンターアプリ

React の `useReducer` と `useContext` を組み合わせて、状態管理をスケーラブルに行うシンプルなカウンターアプリです。  
このプロジェクトは、グローバルステート管理の基本構造を学ぶための学習用サンプルです。

---

## 📁 ディレクトリ構成

```
src/
├── state/
│ └── CounterContext.jsx // useReducer + Context 定義
├── components/
│ └── Counter.jsx // カウント表示＆操作 UI
│ └── App.jsx // Provider で全体を囲む
```

---

## ⚙️ 技術スタック

- React 18+
- useReducer
- useContext
- JavaScript（ES6+）

---

## 🚀 実装の流れ

### 1. `useReducer`で状態管理ロジックを定義

```js
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
```

### 2. `CounterContex.jsx`で Context と Provider を定義

```js
import { createContext, useReducer } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
```

### 3. `Counter.jsx`で状態を読み取る・操作する

```js
import { useContext } from "react";
import { CounterContext } from "../state/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h2>現在のカウント: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        ＋1
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        −1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        リセット
      </button>
    </div>
  );
};

export default Counter;
```

---

## 理解のポイント

- `useReducer` は状態と更新ロジックを分離して管理できる
- `dispatch`はアクション（命令）を`reducer`に渡す関数
- `useContext`でどのコンポーネントからでも状態と操作関数にアクセス可

---

## 今後のアイディア

- `dispatch`に`payload`を渡してみたい
- 複数の Context を組み合わせる
