export function CategoryTable() {
  return (
    <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm">
      <TableHeader />
      <TableRow />
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
        <th className="w-1/2 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Виробник
        </th>
        <th className="w-1/2 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Порядок сортування
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Дія
        </th>
      </tr>
    </thead>
  );
}

function TableRow() {
  return (
    <tbody className="bg-slate-200">
      <tr className="w-full">
        <th className="w-9 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <label>
            <input type="checkbox" />
          </label>
        </th>
        <th className="w-1/2 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Виробник
        </th>
        <th className="w-1/2 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          Порядок сортування
        </th>

        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <PencilSquare />
        </th>
      </tr>
    </tbody>
  );
}

function PencilSquare() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}
