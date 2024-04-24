import Link from "next/link";
import { getProducers } from "./producers";
import { TableRow } from "./TableRow";

export async function ProducersForm() {
  const producers = await getProducers();

  if (producers.err !== null) {
    return producers.err;
  }

  return (
    <form>
      <div className="flex justify-end gap-2">
        <Link
          href="/producer/create"
          className="rounded border bg-white px-6 py-2 font-semibold text-[#8FBC8F]"
        >
          Створити виробника
        </Link>
        <button className="rounded bg-red-500 px-6 py-2 font-semibold text-white">
          Видалити обраних виробників
        </button>
      </div>
      <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm">
        <TableHeader />
        {producers.ok.map((c) => {
          return <TableRow key={c.id} producers={c} />;
        })}
      </table>
    </form>
  );
}

function TableHeader() {
  return (
    <thead className="bg-slate-50">
      <tr className="w-full">
        <th className="w-9 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <label>
            <input type="checkbox" />
          </label>
        </th>
        <th className="w-1/5 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Лого
        </th>
        <th className="w-full border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Назва
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Редагувати
        </th>
      </tr>
    </thead>
  );
}
