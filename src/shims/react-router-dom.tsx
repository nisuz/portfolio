import React from "react";

export const BrowserRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Routes: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Route: React.FC<{ path?: string; element?: React.ReactNode }> = ({ element }) => {
  return <>{element}</>;
};
