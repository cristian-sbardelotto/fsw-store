'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { toast } from 'react-toastify';
import Button from './ui/button';

import { Loader2 } from 'lucide-react';

const THREE_SECONDS_IN_MILLISECONDS = 1000 * 3;

export function CartButton() {
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  function handleFinishPurchase() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      toast('Compra finalizada com sucesso!', {
        position: 'bottom-center',
        type: 'success',
      });

      replace('/');
    }, THREE_SECONDS_IN_MILLISECONDS);
  }

  return (
    <Button
      disabled={isLoading}
      className='uppercase font-medium rounded-xl mt-7'
      onClick={handleFinishPurchase}
    >
      {isLoading ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : (
        'Finalizar Compra'
      )}
    </Button>
  );
}
