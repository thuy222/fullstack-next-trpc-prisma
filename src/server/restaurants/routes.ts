import { updateFavoriteSchema } from './schema';
import { getRestaurants, updateFavorite } from './controller';
import { t } from '~/trpc/trpc-server';


export const restaurantRoute = t.router({
  updateFavorite: t.procedure
    .input(updateFavoriteSchema)
    .mutation(({ input }) => updateFavorite({ input })),
  getRestaurants: t.procedure.query(() => getRestaurants()),
});
