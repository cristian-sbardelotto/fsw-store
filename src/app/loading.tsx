import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className='p-5 flex flex-col gap-8 h-full justify-between'>
      <div className='space-y-8'>
        <Skeleton className='h-[20vw] w-full rounded' />

        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>

      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}
