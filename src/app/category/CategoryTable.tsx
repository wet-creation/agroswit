import Link from "next/link";
import { Category, categoriesData } from "./fetchCategories";

export async function CategoryTable() {
  const categories = await categoriesData();

  if (categories.err !== null) {
    return categories.err;
  }

  return (
    <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm">
      <TableHeader />
      {categories.ok.map((c) => {
        return <TableRow key={c.id} categories={c} />;
      })}
    </table>
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
        {/* todo: add an image column with size 40 / 40 px  */}
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Назва
        </th>
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Назва категорія
        </th>
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Опис
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Дія
        </th>
      </tr>
    </thead>
  );
}

function TableRow(props: { categories: Category }) {
  return (
    <tbody className="bg-slate-200">
      <tr className="w-full">
        <th className="w-9 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <label>
            <input type="checkbox" />
          </label>
        </th>
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {props.categories.name}
        </th>
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {props.categories.parentCategoryId ?? "-"}
        </th>
        <th className="w-1/3 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {props.categories.description ?? "-"}
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <Link href={`/category/${props.categories.id}`}>
            <Eye />
          </Link>
        </th>
      </tr>
    </tbody>
  );
}

function Eye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}
