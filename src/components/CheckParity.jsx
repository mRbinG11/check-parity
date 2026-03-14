import { useState } from "react";

import "./CheckParity.css";

export const CheckParity = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const checkEvenOrOdd = () => {
    let result = "";

    if (input && Number.isFinite(+input) && Number.isInteger(+input))
      if (parseInt(input) % 2 === 0) result = `The number ${input} is even!`;
      else result = `Oops, ${input} is odd!`;
    else result = `Not a valid number!`;

    setOutput(result);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="card">
      <h1>Even or Odd Checker</h1>
      <input
        type="text"
        name="number"
        placeholder="Enter a number"
        value={input}
        onChange={handleChange}
      />
      <button onClick={checkEvenOrOdd}>Check</button>
      {output ? <p id="result">{output}</p> : <></>}
    </div>
  );
};
