import Image from "next/image";
import type { FC } from "react";

import TechnologyCard from "@/components/cards/TechnologyCard";
import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import MemberCard from "@/components/cards/MemberCard";

import { developers } from "@/constants/placeholders";

export default function Devs() {
    return (
        <>
            <Hero />
            <TechnologiesUsed />
            <Developers />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center justify-between" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title={["MEET THE", "DEVELOPERS"]}
                subtitle={[
                    "Get to the know the ins and out of the website",
                    "and the team behind it",
                ]}
            >
                <AccentedButton label="The Team" />
                <TrailingIconButton label="Tech used" icon="i-mdi-arrow-top-right" />
            </HeroLayout>

            <div className="hidden h-full w-1/3 pr-20 md:block">
                <Image
                    width={510}
                    height={768}
                    src={"/opensource-code.png"}
                    alt="Open Source"
                    className="!h-full"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

const TechnologiesUsed: FC = () => {
    return (
        <div className="gap-8 container-content-block">
            <h1 className="text-3xl font-medium leading-tight uppercase text-text-primary md:text-5xl">
                Technologies Used
            </h1>
            <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-5">
                <TechnologyCard name="Sanity" icon="i-logos-sanity" />
                <TechnologyCard name="React" icon="i-logos-react" />
                <TechnologyCard name="NextJS" icon="i-logos-nextjs invert" />
                <TechnologyCard name="Typescript" icon="i-logos-typescript-icon" />
                <TechnologyCard name="UnoCSS" icon="i-logos-unocss invert" />
            </div>
            <button className="mx-auto inline-flex text-center text-xl md:text-2xl">
                Take a peek inside the code
                <div className="i-mdi-arrow-top-right text-xl"></div>
            </button>
        </div>
    );
};

const Developers: FC = () => {
    return (
        <div className="my-24 gap-8 container-content-block">
            <h1 className="text-3xl font-medium leading-tight uppercase text-text-primary md:text-5xl">
                Developers
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {developers.map((developer) => (
                    <MemberCard key={developer.name} {...developer} />
                ))}
            </div>
        </div>
    );
};
