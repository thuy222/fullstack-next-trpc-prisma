ALTER TABLE "Restaurant" DROP COLUMN "price_range",
DROP COLUMN "rating_count",
ADD COLUMN     "priceRange" TEXT NOT NULL,
ADD COLUMN     "ratingCount" INTEGER NOT NULL;
