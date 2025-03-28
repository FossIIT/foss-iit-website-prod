import clsx from "clsx";
import type { Metadata } from "next";
import type { FC } from "react";

import { MEMBER_BOARD } from "@/constants/data";
import type { Member, MemberGroup, MemberUnion } from "@/types/internal";
import cn from "@/utils/cn";

import MemberCard from "@/components/cards/MemberCard";
import HeroLayout from "@/components/hero/HeroLayout";

export const metadata: Metadata = {
    title: "Mozilla Campus Club of IIT - About Us",
};

export default function About() {
    return (
        <>
            <Hero />
            <MemberTree />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="max-h-xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title={["GET TO KNOW", "THE BOARD of officials"]}
                subtitle={["Meet the minds behind Mozilla Campus Club and FOSS Community at IIT: "]}
            />
        </div>
    );
};

const TreeSpacer: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("col-span-full h-48 flex items-center justify-center py-4", className)}>
            <div className="h-full w-[2px] rounded-2xl bg-border-separator/49" />
        </div>
    );
};

const FlexibleMemberCard: FC<{ member: Member }> = ({ member }) => {
    return (
        <div className="col-span-full contents justify-center md:flex">
            <MemberCard member={member} className="col-span-full md:w-104" />
        </div>
    );
};

const MemberTree: FC = () => {
    return (
        <div className="grid grid-cols-8 mb-36 mt-24 justify-items-center gap-y-4 md:gap-x-6">
            <FlexibleMemberCard member={MEMBER_BOARD[0] as Member} />
            <TreeSpacer />
            {/* <FlexibleMemberCard member={MEMBER_BOARD[1] as Member} /> */}
            {/* <TreeSpacer className="h-32" /> */}

            {(MEMBER_BOARD[2] as MemberUnion[]).map((x, i) => {
                // @ts-expect-error Check if item is a mem type or not.
                const isMember = x["role"] !== undefined;

                return (
                    <MemberCard
                        key={x.name}
                        member={isMember ? (x as Member) : undefined}
                        group={isMember ? undefined : (x as MemberGroup)}
                        className={clsx(
                            "col-span-full xl:col-span-2",
                            i === 0 ? "xl:col-start-2" : "",
                        )}
                    />
                );
            })}

            <TreeSpacer className="h-32" />

            {(MEMBER_BOARD[3] as MemberUnion[]).map((member, i) => {
                // @ts-expect-error Check if item is a mem type or not.
                const isMember = member["role"] !== undefined;

                return (
                    <MemberCard
                        key={member.name}
                        member={isMember ? (member as Member) : undefined}
                        group={isMember ? undefined : (member as MemberGroup)}
                        className={clsx(
                            "col-span-full xl:col-span-2",
                            i === 0 ? "xl:col-start-1" : "",
                        )}
                    />
                );
            })}
        </div>
    );
};
