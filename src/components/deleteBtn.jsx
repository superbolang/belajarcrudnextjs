'use client';
import { useRouter } from 'next/navigation';

export const DeleteBtn = (id) => {
  const router = useRouter();
  async function hapusTodo() {
    await fetch('https://v1.appbackend.io/v1/rows/YZ8qk8UTKoHt', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }
  return (
    <button onClick={hapusTodo} className='w-fit text-xs '>
      Delete
    </button>
  );
};
