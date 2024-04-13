import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-[#8FBC8F] px-8 py-4">
      <Link href="/" className="text-3xl font-bold text-white">
        Agroswit
      </Link>
      <Link
        href="/category/create"
        className="bg-white text-[#8FBC8F] font-semibold px-6 py-2 rounded"
      >
        Створити категорію
      </Link>
    </header>
  );
}
