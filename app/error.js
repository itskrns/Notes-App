'use client';

export default function Error({ error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg border border-red-600 bg-red-50 p-4 text-lg font-semibold text-red-600">
        <p>
          {error.message || 'Something went wrong. Please try again later.'}
        </p>
      </div>
    </div>
  );
}
