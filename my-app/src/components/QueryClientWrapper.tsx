import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";
import { Suspense } from "react";

const queryClient = new QueryClient();

const QueryClientWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </QueryClientProvider>
  );
};

export default QueryClientWrapper;
