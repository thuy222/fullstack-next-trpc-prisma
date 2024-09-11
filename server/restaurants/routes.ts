import { t } from '@/utils/trpc-server';
import { updateFavoriteSchema } from './schema';
import { getRestaurants, updateFavorite } from './controller';


export const restaurantRoute = t.router({
  updateFavorite: t.procedure
    .input(updateFavoriteSchema)
    .mutation(({ input }) => updateFavorite({ input })),
  getRestaurants: t.procedure.query(() => getRestaurants()),
});
