import React from "react";

export class QueryClient {
  // minimal stub
}

export const QueryClientProvider: React.FC<{ client?: any; children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
