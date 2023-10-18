import { Category } from '@prisma/client';
import { Badge } from './ui/badge';
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  Mouse,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react';

type CategoryItemProps = {
  category: Category;
};

export function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };

  return (
    <Badge
      variant='outline'
      className='py-3 flex justify-center items-center gap-2 rounded-lg'
    >
      {categoryIcons[category.slug as keyof typeof categoryIcons]}
      <span className='font-bold text-xs'>{category.name}</span>
    </Badge>
  );
}
