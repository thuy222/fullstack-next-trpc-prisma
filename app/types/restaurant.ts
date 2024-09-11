import { STORE_CATEGORY } from '@prisma/client';

export type CategoryText = {
  [key in STORE_CATEGORY]: string;
};

enum CATEGORY {
    SUSHI = "SUSHI",
    UNAGI= "UNAGI",
    TEMPURA= "TEMPURA",
    TONKATSU= "TONKATSU",
    YAKITORI= "YAKITORI",
    SUKIYAKI= "SUKIYAKI",
    SOBA= "SOBA",
    RAMEN= "RAMEN",
    YAKISOBA= "YAKISOBA",
    OKONOMIYAKI= "OKONOMIYAKI",
    DONBURI= "DONBURI",
    ODEN= "ODEN",
    KAISEKI= "KAISEKI",
    HAMBAGU= "",
    TEPPANYAKI= "TEPPANYAKI",
    CURRY= "CURRY",
    YAKINIKU= "YAKINIKU",
    NABE= "NABE",
    CAFE= "CAFE",
    IZAKAYA= "IZAKAYA",
    OTHER= "OTHER"
  }
  
export type RestaurantType = {
    id: string;
    name: string;
    desc: string;
    city: string;
    category: CATEGORY;
    rating: number;
    ratingCount: number;
    priceRange: string;
    images: Array<string> | any;
    featured: {text: string; icon: string} | any;
    isFavorite: boolean;
}
