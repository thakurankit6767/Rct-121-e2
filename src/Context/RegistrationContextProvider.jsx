// Write code for Registration context
import React from "react";
export const AppContext = React.createContext();

const RegistrationContextProvider = () => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default RegistrationContextProvider;
