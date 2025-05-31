import  { useEffect } from "react";
import useFluidCursor from "../hooks/useFluidCursor";

const FluidCanvas = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]"
    />
  );
};

export default FluidCanvas;
