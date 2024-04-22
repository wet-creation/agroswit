import { fetchProducer } from "./producer";

export async function ProducerPreview(props: { producerId: string }) {
  const producer = await fetchProducer(props.producerId);

  if (producer.err !== null) {
    return producer.err;
  }

  return (
    <form className="mx-auto flex h-full w-full max-w-xl grow flex-col gap-3 rounded border bg-[#8FBC8F]/50 p-2">
      <h1 className="text-center text-xl font-semibold">{producer.ok.name}</h1>
      <label>
        Producer name:
        <input type="text" name="name" defaultValue={producer.ok.name} />
      </label>
      <label>
        {/* todo: display it as an image */}
        Producer logo url:
        <input
          type="url"
          required
          defaultValue={producer.ok.logoUrl}
          name="logo"
        />
      </label>
      <div className="grow"></div>
      <button
        type="submit"
        className="rounded border bg-[#8FBC8F]/70 p-3 text-center font-medium"
      >
        Зберігти зміни
      </button>
    </form>
  );
}
