'use client';
import React from 'react';
import Restaurant from './Restaurant';
import Loading from '../../components/core/Loading';
import { SearchInput } from '../../components/core/SearchInput';
import { trpc } from '~/trpc/trpc';
import Tabs from '~/app/components/core/Tabs';
import { transformTabOptions } from '~/app/helpers/restaurants';

export const Restaurants = () => {
  const { data, isLoading } = trpc.getRestaurants.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (data?.restaurants.length === 0) {
    return <p className="text-center">No Restaurants Found</p>;
  }

  const handleTabChange = (tabValue: string) => {
    console.log(tabValue);
  };

  return (
    <div className="max-w-full items-center sm:gap-6 md:flex md:flex-col md:gap-6">
      <SearchInput placeholder="맛집 이름을 검색해보세요" />
      <Tabs tabs={transformTabOptions()} onTabChange={handleTabChange} defaultTab="장어" />
      <div className={`mt-5 flex flex-col flex-wrap items-start justify-center gap-6 md:flex-row`}>
        {data?.restaurants.map((restaurant) => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};
