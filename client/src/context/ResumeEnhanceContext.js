import { createContext, useContext, useState } from 'react';

// Create context with default value
const EnhancedContext = createContext({
  mixData: {},
  setMixData: () => {}
});

// Provider component
const EnhancedProvider = ({ children }) => {
  const [mixData, setMixData] = useState({});

  return (
    <EnhancedContext.Provider value={{ mixData, setMixData }}>
      {children}
    </EnhancedContext.Provider>
  );
};

// Custom hook with validation
const useEnhancedProvider = () => {
  const context = useContext(EnhancedContext);
  if (!context) {
    throw new Error('useEnhancedProvider must be used within an EnhancedProvider');
  }
  return context;
};

export { EnhancedProvider, useEnhancedProvider };
