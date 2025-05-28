import { useState } from "react";

const State = () => {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };

  return (
    <div>
      <button onClick={handleState}>{state ? "hoc" : "off"}</button>
    </div>
  );
};

export default State;
