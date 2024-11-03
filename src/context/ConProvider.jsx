import { createContext, useContext } from 'react';

const contextProvider = createContext(null);
export const ConProvider = ({ children }) => {
  return (
    <contextProvider.Provider value={{ value: 'Hello World' }}>
      {children}
    </contextProvider.Provider>
  );
};

export const useData = () => {
  return useContext(contextProvider);
};
