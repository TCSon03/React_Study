import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  // Nut tang 1
  const handleTang = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  // Nut giam
  const handleGiam = () => {
    setCount((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  // Tăng 5 lần
  const handleTang5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleTang}>Tăng</button>
      <button onClick={handleGiam}>Giam</button>
      <button onClick={handleTang5}>Tăng + 5</button>
    </div>
  );
}

export default Count;
