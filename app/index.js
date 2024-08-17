import Link from "next/link";

export default function Home(params) {
  return (
    <div>
      <h1>Welcome to the Asset Tracker</h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
}
