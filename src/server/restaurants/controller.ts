import { TRPCError } from '@trpc/server';
import prisma from '../../../prisma/prisma-client';
import { Prisma } from '@prisma/client';

export const getRestaurants = async (search?: string, category?:string) => {
  try {
    const where: Partial<Prisma.RestaurantWhereInput> = {};

    if (search !== "") {
      where.OR = [
        { name: { contains: search } },
        { desc: { contains: search } },
      ];
    }

    if (category !== "") {
      where.category = category as  Prisma.EnumSTORE_CATEGORYFilter<"Restaurant">;
    }
    const restaurants = await prisma.restaurant.findMany({
      where,
      orderBy: {
        name: "asc",
      },
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

export const updateFavorite = async (id: string) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: id,
      },
    });

    if (!restaurant) throw new Error("Not found");

   const updatedRestaurant =  await prisma.restaurant.update({
      where: {
        id: restaurant.id,
      },
      data: {
        isFavorite: !restaurant.isFavorite,
      },
    });

    return {
      status: 'success',
      data: updatedRestaurant
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};
