'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">500!</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

        <p className="mt-4 text-gray-500">Something went wrong!</p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

        <button
          className="mt-6 inline-block rounded bg-markals-yellow px-5 py-3 text-sm font-medium text-markals-dark hover:bg-markals-yellow/50 focus:outline-none focus:ring"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
