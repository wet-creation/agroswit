"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Producer } from "./producers";
import { updateProducerName } from "./updateProducerName";

export function TableRow(props: { producers: Producer }) {
  const [producerName, setProducerName] = useState(props.producers.name);
  const [edit, setEdit] = useState(false);
  const producerInputRef = useRef<HTMLInputElement>(null);

  function toggleEdit() {
    setEdit(!edit);
  }

  function denyChanges() {
    setEdit(false);
  }

  async function saveChanges() {
    const inputValue = producerInputRef.current?.value;
    if (!inputValue) {
      return;
    }
    setProducerName(inputValue);
    setEdit(false);

    await updateProducerName(props.producers.id, inputValue);
  }

  return (
    <tbody className="bg-slate-200">
      <tr className="w-full">
        <th className="w-9 border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <label>
            <input type="checkbox" />
          </label>
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <Image
            src={props.producers.logoUrl}
            alt={`${props.producers.name} logo`}
            width={50}
            height={50}
            unoptimized
          />
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          {edit ? (
            <input
              defaultValue={props.producers.name}
              className="w-full"
              ref={producerInputRef}
            />
          ) : (
            <p>{producerName}</p>
          )}
        </th>
        <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">
          <button onClick={toggleEdit} type="button">
            {edit ? (
              <div className="flex gap-3">
                <div onClick={saveChanges}>
                  <Check />
                </div>
                <div onClick={denyChanges}>
                  <XMark />
                </div>
              </div>
            ) : (
              <Pencel />
            )}
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export function Pencel() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      />
    </svg>
  );
}

export function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
