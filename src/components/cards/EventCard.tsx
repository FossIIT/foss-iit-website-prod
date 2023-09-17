import Image from "next/image";

import type { Event } from "@/types/internal";

type Props = Omit<Event, "startingDate" | "description"> & {
    className?: string;
};

export default function EventCard({ name, imageURL }: Props) {
    return (
        <div className="w-full flex flex-col items-center justify-between rounded-xl bg-white/10">
            <Image
                height={256}
                width={256}
                src={imageURL}
                alt={`${name} picture`}
                className="aspect-square w-full rounded-t-xl object-cover"
            />

            <p className="inline-flex py-4 text-center text-xl font-bold">{name}</p>
        </div>
    );
}
