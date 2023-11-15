'use client';

import Image from 'next/image';
import { useState } from 'react';

type ProductImagesProps = {
  name: string;
  imageUrls: string[];
};

export function ProductImages({ name, imageUrls }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  function changeImage(imageUrl: string) {
    setCurrentImage(imageUrl);
  }

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center bg-accent h-[380px] w-full'>
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes='100vw'
          className='w-auto max-w-[80%] h-auto max-h-[70%] object-contain hover:scale-[1.3] transition-all duration-300 cursor-zoom-in'
        />
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8 px-5 md:container'>
        {imageUrls.map(imageUrl => (
          <button
            key={imageUrl}
            onClick={() => changeImage(imageUrl)}
            className={`flex justify-center items-center h-[100px] bg-accent rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors ${
              imageUrl === currentImage &&
              'border-2 border-primary border-solid'
            }`}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes='100vw'
              className='w-auto max-w-[80%] h-auto max-h-[70%] object-contain'
            />
          </button>
        ))}
      </div>
    </div>
  );
}
