import { useState } from "react";

import React from "react";

function Count() {
  const [count, setCount] = useState(0);

  const element = React.createElement(
    "h1",
    { className: "Heading" },
    "Helloworld",
  );
  const element2 = <h1>Heading2</h1>;
  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {element}
      {element2}
      <h3>HEading3</h3>
    </>
  );
}
export default Count;
