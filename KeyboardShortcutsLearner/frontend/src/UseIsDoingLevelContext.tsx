import { useContext } from "react";
import { IsDoingLevelContext } from "./IsDoingLevelContext";

export const useIsDoingLevelContext = () => {
  const context = useContext(IsDoingLevelContext);

  if (!context) {
    throw new Error("useIsDoingLevel must be used inside IsDoingLevelProvider");
  }

  return context;
};
