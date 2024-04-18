import { env } from "@/env.mjs";

export async function fetchCategory(
  categoryId: string,
): Promise<Result<Category, string>> {
  try {
    const res = await fetch(
      `${env.SERVER_URL}/api/v1/categories/${categoryId}`,
    );
    if (res.status === 200) {
      const json = (await res.json()) as Category;
      return { ok: json, err: null };
    }

    return { ok: null, err: await res.text() };
  } catch (e) {
    console.log(e);
    return { ok: null, err: "failed to fetch categories" };
  }
}

export type Category = {
  id: number;
  logoUrl: string | null;
  name: string;
  description: null | string;
  parentCategoryId: null;
  properties: [];
  subcategories: Subcategory[];
};

type Subcategory = {
  id: number;
  logoUrl: null;
  name: string;
  description: null | string;
  parentCategoryName: null;
};
