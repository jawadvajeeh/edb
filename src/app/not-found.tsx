import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-indigo-800">404</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Page not found</p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Looks like this page doesn’t exist in your Day Book.
      </p>
      <Link
        className="mt-8 inline-block rounded-full border-2 bg-indigo-100 px-8 py-2 text-lg font-medium text-indigo-900 transition-colors hover:bg-indigo-300 hover:text-indigo-50"
        replace
        href="/"
      >
        Go back home
      </Link>
    </main>
  );
}
