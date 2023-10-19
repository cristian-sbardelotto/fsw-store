import Image, { ImageProps } from 'next/image';

export function ImageBanner({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className='h-auto w-full px-5'
      width={0}
      height={0}
      sizes='100vw'
      {...props}
    />
  );
}
