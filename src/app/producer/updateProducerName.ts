"use server";

import { env } from "@/env.mjs";
import { Producer } from "./producers";

export async function updateProducerName(
  producerId: number,
  newProducerName: string,
): Promise<Result<Producer, string>> {
  console.log(producerId, newProducerName);
  try {
    const res = await fetch(
      `${env.SERVER_URL}/api/v1/producers/${producerId}`,
      {
        method: "PUT",
        body: JSON.stringify({ name: newProducerName }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (res.status === 200) {
      const json = (await res.json()) as Producer;
      return { ok: json, err: null };
    }

    const text = await res.text();
    return { ok: null, err: text };
  } catch (e) {
    console.log(e);
    return { ok: null, err: "network error" };
  }
}
