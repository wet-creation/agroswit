import Link from "next/link";
import { ProducerForm } from "./ProducerForm";

export default async function Producer() {
  return (
    <>
      <Header />
      <main>
        <ProducerForm />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between bg-[#8FBC8F] px-8 py-4">
      <Link href="/" className="text-3xl font-bold text-white">
        Agroswit
      </Link>
      <Link
        href="/producer/create"
        className="rounded bg-white px-6 py-2 font-semibold text-[#8FBC8F]"
      >
        Створити виробника
      </Link>
    </header>
  );
}
