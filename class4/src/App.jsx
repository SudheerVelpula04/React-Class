
import { useState } from "react";
import Data from "./class.jsx"

function App() {
  const name = "sudheer";
  const [count,setCount]=useState(0)

  return (
    <div>
      <h1>hello hai {name}</h1>
      <Data/>
    </div>
  );
}

export default App;
