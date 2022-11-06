import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 h-screen w-screen flex items-center justify-center font-PoorStory">
      <Main />
    </div>
  );
}

export default App;
