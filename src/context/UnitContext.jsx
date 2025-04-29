import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const UnitContext = createContext();

function UnitContextProvider({ children }) {
  const [unit, setUnit] = useLocalStorageState("metric", "unit");

  function toggleUnit() {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  }
  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}
function useUnit() {
  const context = useContext(UnitContext);
  if (context === undefined)
    throw new Error("UnitContext was used outside the UnitContextProvider");
  return context;
}

export { UnitContextProvider, useUnit };
