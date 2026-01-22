import React from "react";

export const ThemeProvider: React.FC<{ children?: React.ReactNode; attribute?: string; defaultTheme?: string; enableSystem?: boolean }> = ({ children }) => {
  return <>{children}</>;
};
