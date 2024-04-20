'use client';

export const Login = () => {
  return (
    <main className='space-y-6'>
      <section>
        <h1>Login</h1>
        <p>Welcome back</p>
      </section>
      <form className='space-y-2'>
        <input name='email' placeholder='email' />
        <input name='password' type='password' placeholder='password' />
        <button>Sign in</button>
      </form>
    </main>
  );
};
