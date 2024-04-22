import Link from "next/link";
import { Producer, getProducers } from "./producers";
import { Eye } from "../category/CategoryTable";

export async function ProducerForm() {
  const producers = await getProducers();

  if (producers.err !== null) {
    return producers.err;
  }

  return (
    <form>
      <button className="rounded bg-red-500 px-6 py-2 font-semibold text-white">
        Видалити обраних виробників
      </button>
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
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Лого
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Назва
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Дія
        </th>
      </tr>
    </thead>
  );
}

function TableRow(props: { producers: Producer }) {
  return (
    <tbody className="bg-slate-200">
      <tr className="w-full">
        <th className="w-9 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <label>
            <input type="checkbox" />
          </label>
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {/* <Image
            src={props.producers.logoUrl}
            alt={`${props.producers.name} logo`}
            width={40}
            height={40}
          /> */}
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {props.producers.name}
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <Link href={`/category/${props.producers.id}`}>
            <Eye />
          </Link>
        </th>
      </tr>
    </tbody>
  );
}
