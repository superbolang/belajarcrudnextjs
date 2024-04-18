import { FormBikinTodo } from '@/components/createForm';
import { DeleteBtn } from '@/components/deleteBtn';
import { ItemTodo } from '@/components/itemTodo';

export default async function Home() {
  const res = await fetch('https://v1.appbackend.io/v1/rows/YZ8qk8UTKoHt', {
    cache: 'no-store',
  });
  const { data } = await res.json();
  console.log(data);
  return (
    <main className='max-w-2xl m-auto my-6 space-y-4'>
      <h3>My todo list</h3>
      <FormBikinTodo />
      <section className='space-y-4'>
        {data.map((item) => {
          return <ItemTodo key={item._id} id={item._id} title={item.title} content={item.content} />;
        })}
      </section>
    </main>
  );
}
