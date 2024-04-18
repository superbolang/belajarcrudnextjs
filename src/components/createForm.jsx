'use client';

import { useRouter } from 'next/navigation';

export const FormBikinTodo = () => {
  const router = useRouter();
  async function bikinTodo(formData) {
    const title = formData.get('title');
    const content = formData.get('content');
    console.log(title, content);
    const res = await fetch('https://v1.appbackend.io/v1/rows/YZ8qk8UTKoHt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ title, content }]),
    });
    const data = await res.json();
    // console.log(data);
    router.refresh();
  }
  return (
    <div>
      <form action={bikinTodo}>
        <input name='title' placeholder='Masukkan Title' />
        <input name='content' placeholder='Masukkan Content' />
        <button>Bikin to-do</button>
      </form>
    </div>
  );
};
