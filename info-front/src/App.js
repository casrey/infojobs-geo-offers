import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layouts/Layout/Layout";

const queryClient = new QueryClient({});

function App() {
  return (
    <main className="bg-slate-50 p-6 sm:p-10 h-screen">
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </main>
  );
}

export default App;
