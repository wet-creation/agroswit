import Link from "next/link";
import { Category } from "./fetchCategory";

export function CategoryPreview(props: { category: Category }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-xl grow flex-col gap-3 rounded border bg-[#8FBC8F]/50 p-2">
      <h1 className="text-center text-xl font-semibold">
        {props.category.name}
      </h1>
      <div className="grow"></div>
      <Link
        href={`/category/${props.category.id}/edit`}
        className="border bg-[#8FBC8F]/70 p-3 text-center font-medium rounded"
      >
        Редагувати категорію
      </Link>
    </div>
  );
}
