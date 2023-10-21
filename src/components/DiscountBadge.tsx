import { ArrowDownIcon } from 'lucide-react';
import { Badge, BadgeProps } from './ui/Badge';
import { twMerge } from 'tailwind-merge';

export function DiscountBadge({ children, className, ...props }: BadgeProps) {
  return (
    <Badge className={twMerge('px-2 py-0.5', className)}>
      <ArrowDownIcon size={14} /> {children}%
    </Badge>
  );
}
