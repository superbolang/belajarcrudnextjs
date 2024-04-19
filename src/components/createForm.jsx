'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const FormBikinTodo = () => {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (title || content) {
      localStorage.setItem('dataForm', JSON.stringify({ title, content }));
    }
  }, [title, content]);

  useEffect(() => {
    const dataForm = localStorage.getItem('dataForm');
    if (dataForm) {
      const data = JSON.parse(dataForm);
      setTitle(data.title);
      setContent(data.content);
    }
  }, []);

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
        <input name='title' placeholder='Masukkan Title' defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
        <input name='content' placeholder='Masukkan Content' defaultValue={content} onChange={(e) => setContent(e.target.value)} />
        <button>Bikin to-do</button>
      </form>
    </div>
  );
};
