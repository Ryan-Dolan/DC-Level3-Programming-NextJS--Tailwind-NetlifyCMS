import Head from 'next/head';
import Script from 'next/script';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        </Head>
        <Script  src="https://cdn.tailwindcss.com"/>
<div class="bg-white py-12">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-lg font-semibold text-indigo-600">Level 3 Programming</h2>
      <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A better way to learn code</p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Get ready for a hands on learning experience like no other</p>
    </div>
  </div>
</div>
    </div>
  );
}
