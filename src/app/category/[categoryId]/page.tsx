import { CategoryPreview } from "./Category";
import { fetchCategory } from "./fetchCategory";

export default async function Page(props: { params: { categoryId: string } }) {
  const category = await fetchCategory(props.params.categoryId);

  if (category.err !== null) {
    return category.err;
  }

  return (
    <main className="flex grow flex-col border p-2">
      <CategoryPreview category={category.ok} />
    </main>
  );
}
