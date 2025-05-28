import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - CEID",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-8 text-3xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-xl">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
