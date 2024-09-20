import React, { createContext, useContext, useEffect } from 'react';

// Define the context type
interface ResizeContextType {
    onEnterMobile: () => void;
    onLeaveMobile: () => void;
}

// Create the context
const ResizeContext = createContext<ResizeContextType | undefined>(undefined);

interface ResizeProps {
    children: React.ReactNode;
}

// Create a provider component
export const ResizeProvider: React.FC<ResizeProps> = ({ children }) => {
  const onEnterMobile = () => {};
  const onLeaveMobile = () => {};

  const handleResize = () => {
    if (window.innerWidth < 640) {
      onEnterMobile();
    } else {
      onLeaveMobile();
    }
  };

  useEffect(() => {
    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResizeContext.Provider value={{ onEnterMobile, onLeaveMobile }}>
      {children}
    </ResizeContext.Provider>
  );
};

// Create a custom hook for easier consumption of the context
export const useResize = (): ResizeContextType => {
  const context = useContext(ResizeContext);
  if (!context) {
    throw new Error('useResize must be used within a ResizeProvider');
  }
  return context;
};
