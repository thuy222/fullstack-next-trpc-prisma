import { TRPCError } from '@trpc/server';
import { UpdateFavoriteInput } from './schema';
import prisma from '../../../prisma/prisma-client';

export const getRestaurants = async () => {
  try {
    const queryFields = {
      id: true,
      name: true,
      images: true,
      isFavorite: true,
      category: true,
      city: true,
      priceRange: true,
      createdAt: true,
      desc: true,
      featured: true,
      rating: true,
      ratingCount: true,
      updatedAt: true,
    };
    const restaurants = await prisma.restaurant.findMany({
      select: queryFields,
    });
    return {
      status: 'success',
      restaurants,
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};

export const updateFavorite = async ({ input }: { input: UpdateFavoriteInput }) => {
  try {
    const restaurant = await prisma.restaurant.update({
      where: {
        id: input.id,
      },
      data: {
        isFavorite: input.favorite,
      },
    });
    return {
      status: 'success',
      data: {
        id: restaurant.id,
        isFavorite: restaurant.isFavorite,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};
