import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
  fallbackSrc: string;
}

export const ImageBox: React.FC<CustomImageProps> = (props) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};
