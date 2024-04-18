'use client';
import { DeleteBtn } from './deleteBtn';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const ItemTodo = ({ id, title, content }) => {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);
  async function UpdateTodo(formData) {
    const title = formData.get('title');
    const content = formData.get('content');
    await fetch('https://v1.appbackend.io/v1/rows/YZ8qk8UTKoHt', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id, title, content }),
    });
    setIsEditMode(false);
    router.refresh();
  }

  return (
    <div>
      {isEditMode ? (
        <form action={UpdateTodo}>
          <input defaultValue={title} name='title' />
          <input defaultValue={content} name='content' />
          <button className='text-xs w-fit'>Update</button>
        </form>
      ) : (
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
          <div className='flex gap-2'>
            <button className='text-xs w-fit' onClick={() => setIsEditMode(true)}>
              Edit
            </button>
            <DeleteBtn id={id} />
          </div>
        </div>
      )}
    </div>
  );
};
