import { Header } from "../page";
import { ProducerPreview } from "./ProducerPreview";

export default async function Producer(props: {
  params: { producerId: string };
}) {
  return (
    <>
      <Header />
      <main className="flex grow flex-col border p-2">
        <ProducerPreview producerId={props.params.producerId} />
      </main>
    </>
  );
}
