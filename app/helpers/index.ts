export const getRandomImage = (images: Array<string> | any) => {

  if(!Array.isArray(images)) {
    return  "/no-image.png"
  }
  const randomIndex = Math.floor(Math.random() * images.length);

  return images[randomIndex]

}