import { env } from "@/env.mjs";

export async function getProducers(): Promise<Result<Producer[], string>> {
  try {
    const res = await fetch(`${env.SERVER_URL}/api/v1/producers`);

    if (res.status === 200) {
      const json = (await res.json()) as Producer[];
      return { ok: json, err: null };
    }

    return { ok: null, err: await res.text() };
  } catch (e) {
    console.log(e);
    return { ok: null, err: "network error" };
  }
}

export type Producer = {
  id: number;
  name: string;
  logoUrl: string;
};
