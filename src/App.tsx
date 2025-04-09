import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>hello world</h1>
      <h1>count : {count}</h1>
      <div className="flex gap-3 items-center justify-center">
        <button
          className="bg-neutral-700 rounded-full w-10 text-white hover:opacity-75"
          onClick={() => setCount((curstate) => curstate - 1)}
        >
          -
        </button>
        <button
          className="border border-neutral-700 rounded-full px-3 hover:opacity-75"
          onClick={() => setCount(0)}
        >
          reset
        </button>
        <button
          className="bg-neutral-700 rounded-full w-10 text-white hover:opacity-75"
          onClick={() => setCount((curstate) => curstate + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
