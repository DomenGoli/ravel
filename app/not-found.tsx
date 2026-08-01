import Link from "next/link";

function NotFound() {
    return (
        <main className="text-center space-y-6 mt-4">
            <h1 className="text-3xl font-semibold">
                Strani ni bilo mogoce najti :(
            </h1>
            <Link
                href="/"
                className="inline-block bg-(--strava-button) rounded-md text-(--strava-ozadje) px-4 py-2 text-lg"
            >
                Nazaj domov
            </Link>
        </main>
    );
}

export default NotFound;
