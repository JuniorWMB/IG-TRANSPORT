import { createContext } from "react";

// export const TotalVolumeContext = React.createContext();
export const KilometreContext = createContext();

export const KilometreProvider = ({ children }) => {
  return (
    <KilometreContext.Provider value="i got it">
      {children}
    </KilometreContext.Provider>
  );
};
