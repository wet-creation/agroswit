import { env } from "@/env.mjs";

export async function categoriesData(): Promise<Result<Category[], string>> {
  try {
    const res = await fetch(`${env.SERVER_URL}/api/v1/categories`);

    if (res.status === 200) {
      const json = (await res.json()) as Category[];
      return { ok: json, err: null };
    }

    return { ok: null, err: await res.text() };
  } catch (e) {
    console.error(e);
    return { ok: null, err: "failed to fetch categories" };
  }
}

export type Category = {
  id: number;
  name: string;
  description: null;
  parentCategoryId: null; // use - when null
  properties: Property[];
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: number;
  name: string;
  description: null;
};

export type Property = { name: string; type: "TEXT" };
