"use client";

import { FC, useEffect, useRef, useState } from "react";

import type { ExternalLink, Member, MemberGroup } from "@/types/internal";
import cn from "@/utils/cn";
import { mapToLines } from "@/utils/react/shared";

import Avatar from "@/components/Avatar";
import SocialLink from "@/components/buttons/SocialLink";

type Props = {
    member?: Member;
    group?: MemberGroup;
    className?: string;
};

export default function MemberCard({ member, group, className }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (ref.current?.contains(target)) return;
            setVisibility(false);
        };

        /**
         * NOTE(Curstantine):
         * Why? I wouldn't know!!
         * Apparently an element that has absolute + unconstrained height can't bubble onBlur event.
         * So we listen to click events in the dom and respond to it.
         */
        document.addEventListener("click", listener);
        return () => document.removeEventListener("click", listener);
    }, []);

    return (
        <div ref={ref} className={cn("relative w-full min-h-22", className)}>
            <div
                className={cn(
                    "absolute inset-0 max-h-md flex flex-col rounded-3xl bg-white/9 px-3 cursor-pointer",
                    "transition-background-color,height transform-gpu use-transition-standard",
                    { "h-fit max-h-96 bg-[#2B2B2B]! z-30 shadow-lg": isVisible },
                )}
            >
                <DetailsRow
                    name={(member?.name ?? group?.name)!}
                    role={member?.role}
                    imageURL={member?.imageURL}
                    trailing={{ onPress: () => setVisibility((x) => !x), active: isVisible }}
                />
                {isVisible
                    && (member !== undefined
                        ? (
                            <MemberExpandedDetailsRow
                                role={member.role}
                                bio={member.bio}
                                externalLinks={member.externalLinks}
                                underlings={member.underlings}
                            />
                        )
                        : (
                            <MemberGroupExpandedDetailsRow
                                name={group!.name}
                                members={group!.members}
                                underlings={group!.underlings}
                            />
                        ))}
            </div>
        </div>
    );
}

const DetailsRow: FC<
    Pick<Member, "name"> & Partial<Pick<Member, "role" | "imageURL">> & {
        trailing?: {
            active: boolean;
            onPress: () => void;
        };
    }
> = ({ name, role, imageURL, trailing: { active, onPress } = {} }) => {
    return (
        <div className="h-22 min-h-22 flex items-center gap-3" onClick={onPress}>
            {imageURL === undefined
                ? <div className="w-1" />
                : <Avatar name={name} imageURL={imageURL} size="16" />}
            <div className="flex flex-1 flex-col gap-1">
                <span className="text-text-primary font-medium leading-tight">{name}</span>
                <span className="select-none text-xs text-text-primary/50 leading-tight">
                    {role}
                </span>
            </div>
            {active !== undefined && (
                <div className="inline-flex">
                    <div
                        className={cn(
                            "i-mdi-chevron-down h-6 w-6 text-text-secondary transition-transform transform-gpu use-transition-standard",
                            { "rotate-180": active },
                        )}
                    />
                </div>
            )}
        </div>
    );
};

const MemberExpandedDetailsRow: FC<Omit<Member, "imageURL" | "name">> = ({
    role,
    underlings,
    bio,
    externalLinks,
}) => {
    return (
        <div className="flex flex-col gap-2 px-2 pb-4">
            <span className="text-xs text-text-primary/60">{mapToLines(bio)}</span>
            <ExternalLinkList externalLinks={externalLinks} />
            {underlings && underlings.length > 0 && (
                <UnderlingList underlings={underlings} to={role} />
            )}
        </div>
    );
};

const MemberGroupExpandedDetailsRow: FC<MemberGroup> = ({ name, members, underlings }) => {
    return (
        <div className="flex flex-col gap-4 px-2 pb-4">
            {members.map((member) => (
                <div key={member.name} className="flex flex-col">
                    <DetailsRow name={member.name} role={member.role} imageURL={member.imageURL} />
                    <span className="text-xs text-text-primary/60">
                        {mapToLines(member.bio)}
                    </span>
                    <ExternalLinkList externalLinks={member.externalLinks} />
                </div>
            ))}
            {underlings && underlings.length > 0 && (
                <UnderlingList underlings={underlings} to={name} />
            )}
        </div>
    );
};

const UnderlingList: FC<{ underlings: Pick<Member, "name" | "imageURL">[]; to: string }> = ({
    underlings,
    to,
}) => {
    return (
        <>
            <div className="my-2 h-0 b-t-2 b-t-border-separator/35" />
            <span className="pb-1 text-text-primary/50 font-bold leading-tight">
                People Who Reports To {to}
            </span>
            <div className="flex gap-4">
                {underlings.map((x) => (
                    <Avatar
                        key={x.name}
                        name={x.name}
                        imageURL={x.imageURL}
                    />
                ))}
            </div>
        </>
    );
};

const ExternalLinkList: FC<{ externalLinks: Partial<Record<ExternalLink, string>> }> = ({
    externalLinks,
}) => {
    return (
        <div className="grid grid-cols-5 mt-1 max-w-fit gap-2">
            {Object.entries(externalLinks).map(([key, value]) => (
                <SocialLink
                    key={key}
                    type={key as ExternalLink}
                    href={value}
                    className="border-[#D7D7D7]/14"
                />
            ))}
        </div>
    );
};
