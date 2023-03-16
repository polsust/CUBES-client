import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();
export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
