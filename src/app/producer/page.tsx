import Link from "next/link";
import { ProducersForm } from "./ProducerForm";

export default async function Producer() {
  return (
    <>
      <Header />
      <main>
        <ProducersForm />
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
    </header>
  );
}
