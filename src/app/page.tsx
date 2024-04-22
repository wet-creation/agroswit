import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/category">Category</Link>
      <Link href="/producer">Producer</Link>
    </main>
  );
}
