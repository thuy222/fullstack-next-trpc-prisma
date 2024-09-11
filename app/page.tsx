import { dehydrate } from '@tanstack/react-query';
import Hydrate from '@/utils/hydrate-client';
import { createSSRHelper } from './api/trpc/trpc-router';
import { Restaurants } from './pages/restaurants/Restaurants';

export default async function Home() {
  const helpers = createSSRHelper();
  await helpers.getRestaurants.prefetch();
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <main
        style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}
        className="items-center md:flex md:flex-col md:gap-6"
      >
        <Restaurants />
      </main>
    </Hydrate>
  );
}
