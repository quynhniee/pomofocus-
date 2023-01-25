import { useEffect, useRef } from "react";

const useOnClickOutside = (handler) => {
  const ref = useRef();
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler]);
  return ref;
};

export default useOnClickOutside;
