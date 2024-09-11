'use client';
import { useState } from 'react';
import superjson from 'superjson';
import { trpc } from './trpc';
import queryClient from './query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, getFetch, loggerLink } from '@trpc/client';

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const url = 'http://localhost:3000';
  const urlApi = `${url}/api/trpc`;
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: urlApi,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
              headers: {
                'Access-Control-Allow-Origin': url,
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
              },
            });
          },
        }),
      ],
      transformer: superjson,
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
