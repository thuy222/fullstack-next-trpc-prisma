import { dehydrate } from '@tanstack/react-query';
import { createSSRHelper } from './api/trpc/trpc-router';
import { Restaurants } from './pages/restaurants/Restaurants';
import Hydrate from '~/trpc/hydrate-client';

export default async function Home() {
  const helpers = createSSRHelper();
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <main
        style={{ maxWidth: 400, marginInline: 'auto', padding: 20 }}
        className="items-center md:flex md:flex-col md:gap-6"
      >
        <Restaurants />
      </main>
    </Hydrate>
  );
}
