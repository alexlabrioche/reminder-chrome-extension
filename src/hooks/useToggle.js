import { useState } from "react";

export default function useToggle() {
  const [state, setState] = useState(false);
  const toggle = () => setState((oldState) => !oldState);

  return [state, toggle];
}
