//helpers for restaurant only
import { Prisma } from "@prisma/client";

export const transformFeaturedData = (featured: Prisma.JsonValue) => {
    if (typeof featured === 'object' && featured !== null && 'icon' in featured && "text" in featured) {
      return  {
        icon: (featured as { icon?: string }).icon,
        text: (featured as { text?: string }).text,
      }
    }
    return {
        icon: "",
        text:""
    }
}

export const getRandomImage = (images: Array<string> | any) => {

  if(!Array.isArray(images)) {
    return  "/no-image.png"
  }
  const randomIndex = Math.floor(Math.random() * images.length);

  return images[randomIndex]

}