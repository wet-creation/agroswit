export function CategoryTable() {
  return (
    <section className="flex flex-col">
      <TableHeader />
      <TableRow />
    </section>
  );
}

function TableRow() {
  return (
    <div className="flex w-full divide-x divide-y bg-gray-100 text-center">
      <label className="p-2">
        <input type="checkbox" />
      </label>
      <div className="grow p-2">Виробник</div>
      <div className="grow p-2">Порядок сортування</div>
      <div className="w-auto p-2">
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full divide-x divide-y bg-gray-50 text-center">
      <label className="p-2">
        <input type="checkbox" />
      </label>
      <div className="grow p-2">Виробник</div>
      <div className="grow p-2">Порядок сортування</div>
      <div className="w-auto p-2">Дія</div>
    </div>
  );
}
