import Link from "next/link";
import { fetchProducer } from "./producer";

export async function ProducerPreview(props: { producerId: string }) {
  const producer = await fetchProducer(props.producerId);

  if (producer.err !== null) {
    return producer.err;
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-xl grow flex-col gap-3 rounded border bg-[#8FBC8F]/50 p-2">
      <h1 className="text-center text-xl font-semibold">{producer.ok.name}</h1>
      <h2>Producer logo: {producer.ok.logoUrl}</h2>
      {/* <Image
            src={producers.ok.logoUrl}
            alt={`${producers.ok.name} logo`}
            width={40}
            height={40}
          /> */}
      <div className="grow"></div>
      <Link
        href={`/producer/${producer.ok.id}/edit`}
        className="rounded border bg-[#8FBC8F]/70 p-3 text-center font-medium"
      >
        Редагувати продюсера
      </Link>
    </div>
  );
}
