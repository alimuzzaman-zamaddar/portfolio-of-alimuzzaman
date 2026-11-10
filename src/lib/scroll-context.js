import { createContext, useContext } from "react";

export const ScrollContext = createContext({
  lenisRef: { current: null },
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(ScrollContext);
}
