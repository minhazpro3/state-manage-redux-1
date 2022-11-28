import { createContext, useState } from "react";
import "./App.css";
import FormFrame from "./components/FormFrame";
import Parent from "./components/Parent";

export const GLOBALSTATE = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <GLOBALSTATE.Provider value={value}>
      <div className="App">
        {/* <Parent /> */}
        <FormFrame />
      </div>
    </GLOBALSTATE.Provider>
  );
}

export default App;
