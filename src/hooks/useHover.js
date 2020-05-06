import { useRef, useState, useEffect } from "react";

export default function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setTimeout(() => setValue(false), 500);
    const element = ref && ref.current;

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, value];
}
