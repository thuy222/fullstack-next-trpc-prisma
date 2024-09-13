import { getRestaurants, updateFavorite } from './controller';
import { t } from '~/trpc/trpc-server';
import { z } from 'zod';


export const restaurantRoute = t.router({
  getRestaurants: t.procedure.input(
    z.object({
      search: z.string().optional(),
      category: z.string().optional(),
    })
  ).query(async (option) => {
    const { search, category } = option.input;
    return await getRestaurants(search, category)
  }),

  addFavorite: t.procedure
  .input( 
    z.object({
      id: z.string(),
  }))
  .mutation((option) => updateFavorite(option.input.id)),
});
