"use client";

import clsx from "clsx";
import { m } from "motion/react";
import type { FC } from "react";

import type { Event } from "@/types/internal";
import { getFancyDate } from "@/utils/date";
import { mapToLines } from "@/utils/react/shared";

type Props = Omit<Event, "startingDate">;

export default function EventTreeCard({ name, description }: Props) {
    return (
        <m.div
            initial="from"
            whileInView="to"
            viewport={{ once: true }}
            variants={{
                from: { y: 20, opacity: 0 },
                to: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
            }}
            className="h-fit w-full flex flex-col rounded-xl bg-white/10 backdrop-blur-lg md:min-h-36 md:flex-row md:py-4"
        >
            <div className="flex flex-col justify-center gap-1 px-4 py-2 md:py-0">
                <span className="text-base text-text-primary font-bold md:text-xl">{name}</span>
                <span className="text-sm text-text-secondary leading-tight md:text-base">
                    {mapToLines(description)}
                </span>
            </div>
        </m.div>
    );
}

export const EventTreeCardFlexWrapper: FC<{ event: Event }> = ({ event }) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lg text-text-primary font-bold">
                {getFancyDate(event.startingDate)}
            </span>
            <EventTreeCard
                name={event.name}
                imageURL={event.imageURL}
                description={event.description}
            />
        </div>
    );
};

export const EventTreeCardGridWrapper: FC<{ event: Event; isEven: boolean }> = ({
    event,
    isEven,
}) => {
    const elements = [
        <EventTreeCard
            key="card"
            name={event.name}
            imageURL={event.imageURL}
            description={event.description}
        />,
        <span
            key="label"
            className={clsx("text-xl text-text-primary font-bold", { "text-right": isEven })}
        >
            {getFancyDate(event.startingDate)}
        </span>,
    ];

    /**
     * NOTE(Curstantine):
     *  How cursed is this even? We can probably just reverse the layout using some div wrapper in grids,
     *  but reversing the element would be so much cleaner, lel.
     */
    return isEven ? elements.reverse() : elements;
};
