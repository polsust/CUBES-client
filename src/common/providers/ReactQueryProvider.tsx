import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ChildrenProps from "../types/ChildrenProps";

const queryClient = new QueryClient();
export default function ReactQueryProvider({ children }: ChildrenProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
