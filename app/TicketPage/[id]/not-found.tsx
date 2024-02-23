import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2>Ticket Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        Return to <span className="text-lime-400">Dashboard</span>
      </Link>
    </div>
  );
}
