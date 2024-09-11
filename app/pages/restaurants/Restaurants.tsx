'use client';
import React from 'react';
import { trpc } from '@/utils/trpc';
import Restaurant from './Restaurant';
import { SearchInput } from '@/app/components/core/SearchInput';
import { RestaurantType } from '@/app/types/restaurant';
import Loading from '@/app/components/core/Loading';

export const Restaurants = () => {
  const { data, isLoading } = trpc.getRestaurants.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (data?.restaurants.length === 0) {
    return <p className="text-center">No Restaurants Found</p>;
  }

  return (
    <div className="items-center sm:gap-6 md:flex md:flex-col md:gap-6">
      <SearchInput placeholder="맛집 이름을 검색해보세요" />
      <div className={`mt-5 flex flex-col flex-wrap items-start justify-center gap-6 md:flex-row`}>
        {data?.restaurants.map((restaurant) => {
          return <Restaurant key={restaurant.id} restaurant={restaurant as RestaurantType} />;
        })}
      </div>
    </div>
  );
};
