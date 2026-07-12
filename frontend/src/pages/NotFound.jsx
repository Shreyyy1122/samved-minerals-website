import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-900 px-6 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black text-yellow-500">404</h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold transition hover:bg-yellow-600"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;