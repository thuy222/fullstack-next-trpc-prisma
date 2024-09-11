'use client';
import { ImageBox } from '@/app/components/core/ImageBox';
import { HeartIcon } from '@/app/components/icon/HeartIcon';
import { SlideIcon } from '@/app/components/icon/SlideIcon';
import { TEXT_BY_STORE_CATEGORY } from '@/app/constants';
import { getRandomImage } from '@/app/helpers';
import { RestaurantType } from '@/app/types/restaurant';
import { trpc } from '@/utils/trpc';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = Readonly<{
  restaurant: RestaurantType;
}>;

const Restaurant = ({ restaurant }: Props) => {
  const {
    isFavorite,
    name,
    id,
    category,
    images,
    city,
    desc,
    rating,
    ratingCount,
    featured,
    priceRange,
  } = restaurant;

  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const { mutate, isLoading, isSuccess } = trpc.updateFavorite.useMutation({
    onSuccess: (resp) => {
      setIsFavoriteState(resp.data.isFavorite);
    },
    onError: () => {
      //if error, set back to original
      setIsFavoriteState(isFavorite);
    },
  });

  const handleClickFavorite = () => {
    setIsFavoriteState(!isFavoriteState); // immediately update UI, then based on api response to update again
    mutate({ id: id, favorite: !isFavoriteState });
  };

  return (
    <div className="w-full md:max-w-xs">
      <div className="relative aspect-[358/200] w-full md:w-[20rem]">
        <div
          className={`absolute right-2 top-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white-55 md:h-14 md:w-14`}
          onClick={handleClickFavorite}
        >
          <HeartIcon
            className={`h-[26px] w-[26px] ${isFavoriteState ? 'fill-white' : 'fill-none'} md:h-[28px] md:w-[28px]`}
          />
        </div>
        <ImageBox
          src={getRandomImage(images)}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="relative rounded-xl object-cover"
          fallbackSrc="/no-image.png"
          priority={true}
        />
        <SlideIcon className="absolute bottom-0 left-1/2 top-[85%] -translate-x-1/2 transform md:hidden" />
      </div>
      <div className="mt-2 w-full">
        <div className={`flex items-start gap-1 md:gap-2`}>
          {featured.icon && (
            <Image
              src={`/${featured.icon}.svg`}
              width={15}
              height={15}
              alt="stars"
              className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
              priority={true}
            />
          )}
          <p className="truncate text-xs text-orange md:text-sm">{featured.text}</p>
        </div>
        <div className="flex items-center justify-between gap-1 md:gap-2">
          <p className={`w-[80%] shrink truncate text-base font-bold text-primary md:text-lg`}>
            {name}
          </p>
          <div className={`flex`}>
            <Image
              src={`/stars-01.svg`}
              width={15}
              height={15}
              alt="stars"
              className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
            />
            <p className="text-xs text-primary md:text-sm">
              {rating}({ratingCount})
            </p>
          </div>
        </div>
        <p className={`truncate text-base text-primary md:text-lg`}>{desc}</p>
        <p className={`truncate text-base capitalize text-primary md:text-lg`}>
          {city}
          {category && ` · ${TEXT_BY_STORE_CATEGORY[category]}`}
          {`· ${priceRange} won`}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
