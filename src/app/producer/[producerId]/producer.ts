import { env } from "@/env.mjs";
import { Producer } from "../producers";

export async function fetchProducer(
  producerId: string,
): Promise<Result<Producer, string>> {
  try {
    const res = await fetch(`${env.SERVER_URL}/api/v1/producers/${producerId}`);

    if (res.status === 200) {
      const json = (await res.json()) as Producer;
      return { ok: json, err: null };
    }

    return { ok: null, err: await res.text() };
  } catch (e) {
    console.error(e);
    return { ok: null, err: "network error" };
  }
}
