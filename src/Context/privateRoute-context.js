import React, { useState, createContext } from "react";

const PrivateRouteContext = createContext();

const PrivateRouteContextProvider = ({ children }) => {
  const [privateRoute, setPrivateRoute] = useState(false);

  return (
    <div>
      <PrivateRouteContext.Provider value={{ privateRoute, setPrivateRoute }}>
        {children}
      </PrivateRouteContext.Provider>
    </div>
  );
};

export { PrivateRouteContext, PrivateRouteContextProvider };
