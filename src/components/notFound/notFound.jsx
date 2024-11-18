import { Link } from '@tanstack/react-router'

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-row items-center justify-center overflow-hidden bg-[#F7F7F7]">
      <div>
        <img
          src="/assets/mockups/not_found.png"
          className="max-h-screen object-cover"
          alt="not found"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="font-inter text-2xl font-light text-[#808080]">
          Oops! Looks like you&apos;re lost. The page <br />
          you&apos;re looking for isn&apos;t here. Let&apos;s get <br />
          you back on track.
        </p>
        <Link
          to="/"
          className="rounded-xl border border-normal_yellow bg-normal_yellow px-3 py-2 text-white"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  )
}
