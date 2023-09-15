import { FC } from "react";

import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import Image from "next/image";
import MemberSquareCard from "@/components/cards/MemberSquareCard";

export default function Home() {
    return (
        <div className="z-20 flex flex-col">
            <Hero />
            <AboutUs />
            <OurMission />
            <OurVision />
            <BoardOfOfficials />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="relative flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                    WOMEN IN FOSS COMMUNITY OF IIT
                </h1>
                <span className="mt-8 max-w-40ch text-lg font-medium leading-loose uppercase font-italic">
                    Empowering Diversity, Fostering Collaboration, and Building a Stronger FOSS
                    Community Together
                </span>

                <div className="mt-24 inline-flex gap-8">
                    <AccentedButton label="Join Us" />
                    <TrailingIconButton icon="i-mdi-arrow-top-right" label="Board of Officials" />
                </div>
            </div>
            <div className="absolute bottom-0 right-20 w-2/5">
                <Image
                    src="/wif-developer.png"
                    width={782}
                    height={521}
                    alt="WIF Female Developer"
                />
            </div>
        </div>
    );
};

const AboutUs: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col px-16 prose">
            <h1 className="uppercase">ABOUT US</h1>
            <p>
                The Women in FOSS (Free and Open-Source Software) Community of IIT is an affinity
                group within the FOSS Community dedicated to advancing women’s involvement in free
                and open-source software development. We work to foster collaboration, provide
                resources, and empower women in the FOSS community. We strive to create an
                atmosphere of inclusion and support, promote research and development in FOSS, and
                provide access to mentorship and educational opportunities. Our community is open to
                everyone, regardless of gender identity, race, ethnicity, religion, sexual
                orientation, age, or disability. We believe that everyone has something valuable to
                contribute and that diversity of thought and experience is essential to the success
                of the community. We strive to create an environment of mutual respect and
                understanding where everyone can contribute and learn. The Women in FOSS Community
                provides a platform for members to learn about the open-source software ecosystem,
                acquire the skills to contribute to open-source projects and, take part in
                collaborations with other members of the community. We aim to encourage the
                participation of women in open source and to provide them with the resources and
                support they need to succeed. Through our initiatives, we hope to build a strong and
                vibrant community of Women in FOSS at IIT and beyond.
            </p>
        </div>
    );
};

const OurMission: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col px-16 prose">
            <h1 className="uppercase">Our Mission</h1>
            <p>
                The mission of the Women in FOSS Community of IIT is to empower women to become
                active members of the open-source software development community, foster
                collaboration, and cultivate a welcoming and diverse environment for everyone. We
                advocate for gender diversity in technology and provide resources to support and
                empower women to become confident contributors to the open-source community. We are
                committed to providing a platform where women can learn, grow, and share their
                knowledge and experience. We strive to promote the development of open-source
                software and to increase the representation of women in the field. We believe in
                creating an inclusive and accessible community that encourages collaboration,
                innovation, and creativity. Through our efforts, we hope to bridge the gender gap in
                open-source and the industry.
            </p>
        </div>
    );
};

const OurVision: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col px-16 prose">
            <h1 className="uppercase">Our Vision</h1>
            <p>
                The Women in FOSS community of IIT seeks to foster a diverse and inclusive community
                that promotes and encourages the participation of women in open-source software
                development. We strive to create a supportive community that encourages learning,
                collaboration, and innovation. Through our collective efforts, we hope to foster a
                culture of learning and collaboration where members can develop their skills and
                knowledge and be empowered to be confident and successful in their chosen career
                paths. We aim to increase the visibility of women in FOSS, provide resources and
                mentorship opportunities, and promote the development of FOSS projects within IIT.
                We strive to create inclusivity in the open-source world and to ensure that all
                voices are heard and respected. We believe that by providing a safe and supportive
                environment, we can inspire and empower women to take on meaningful roles and make
                valuable contributions to the open-source world. We hope to achieve this vision by
                continuing to foster a culture of learning, collaboration, and mutual respect.
            </p>
        </div>
    );
};

const BoardOfOfficials: FC = () => {
    return (
        <div className="my-24 max-w-full flex flex-col px-16 prose">
            <h1 className="uppercase">Board of Officials</h1>
            <div className="mt-10 flex flex-wrap gap-10">
                {wifBoard.map((member, index) => {
                    return (
                        <MemberSquareCard
                            key={index}
                            imgURL={member.imgURL}
                            name={member.name}
                            socials={member.socials}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const wifBoard = [
    {
        imgURL: "/nadul.png",
        name: "Nadul Jayasundera",
        socials: { linkedin: "http://linkedin.com" },
    },
    {
        imgURL: "/nadul.png",
        name: "Nadul Jayasundera",
        socials: { linkedin: "http://linkedin.com" },
    },
    {
        imgURL: "/nadul.png",
        name: "Nadul Jayasundera",
        socials: { linkedin: "http://linkedin.com" },
    },
    {
        imgURL: "/nadul.png",
        name: "Nadul Jayasundera",
        socials: { linkedin: "http://linkedin.com" },
    },
];
