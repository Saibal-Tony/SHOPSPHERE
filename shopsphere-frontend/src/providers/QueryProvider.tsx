import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,      // cache 10 minutes
      gcTime: 1000 * 60 * 30,         // keep in memory 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,     // don't refetch when tab refocused
      refetchOnMount: false,           // don't refetch if data exists
    },
  },
});

export default function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
