import Image, { ImageProps } from 'next/image';

import { twMerge } from 'tailwind-merge';

export function ImageBanner({ src, alt, className, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={twMerge('h-auto w-full px-5', className)}
      width={0}
      height={0}
      sizes='100vw'
      {...props}
    />
  );
}
