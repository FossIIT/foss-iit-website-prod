import type { Event, Member, MemberUnion, Project, WIFBoardOfficial } from "@/types/internal";

export const event: Event = {
    name: "OpenHack 3.0",
    imageURL: "/openhack.png",
    description: [
        "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
    ],
    startingDate: new Date("2023-08-18"),
};

// export const events: Event[] = Array.from({ length: 5 }).map((_, i) => ({
//     ...event,
//     name: `OpenHack ${i}`,
// }));

export const events: Event[] = [
    {
        name: "OpenHack 3.0",
        imageURL: "/projects/openhack3.png",
        description: [
            "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
        ],
        startingDate: new Date("2023-08-18"),
    },
    {
        name: "her.exe",
        imageURL: "/projects/her-exe.png",
        description: [
            "WIF's podcast series spotlights women in tech, celebrating their achievements, experiences, and personalities.",
        ],
        startingDate: new Date("2023-10-18"),
    },
    {
        name: "Summer Bootcamp 2023",
        imageURL: "/projects/summer-bootcamp.png",
        description: [
            "This two-day bootcamp empowered students with MERN stack skills to create personal portfolio websites",
        ],
        startingDate: new Date("2023-09-09"),
    },
    {
        name: "OpenHack 2.0",
        imageURL: "/projects/openhack3.png",
        description: [
            "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022.",
        ],
        startingDate: new Date("2023-02-18"),
    },
    {
        name: "Flutter Bootcamp",
        imageURL: "/projects/flutter-bootcamp.png",
        description: [
            "Organized by Women in Foss at IIT, Flutter Bootcamp 2022 provided hands-on mobile development training using Flutter.",
        ],
        startingDate: new Date("2022-10-29"),
    },
];

export const members: Record<0 | 1 | 2 | 3, MemberUnion | MemberUnion[]> = {
    0: {
        name: "Sahan Dissanayake",
        role: "President",
        imageURL: "/portraits/Sahan.jpg",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/sahan-dissanayake-82291516a/",
            instagram: "https://instagram.com/sahandissanayakeee?igshid=MWZjMTM2ODFkZg==",
        },
        occupations: [
            "Undergraduate trainee - Software Engineering @ IFS R&D | Software engineering undergraduate  @ IIT ",
        ],
    },
    1: {
        name: "Sachith Wickramasekara",
        role: "Vice President",
        imageURL: "/portraits/sachith.webp",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/sachith-wickramasekara/",
            instagram: "https://instagram.com/sach.cha_?igshid=MWZjMTM2ODFkZg==",
        },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    2: [
        {
            name: "Bhagya Semage",
            role: "Secretary ",
            imageURL: "/portraits/Bhagya.jpg",
            externalLinks: {
                linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/",
                instagram: "https://instagram.com/s.e.m.a.g.e.02?igshid=MWZjMTM2ODFkZg==",
            },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Vinuja Jayathilake",
            role: "Treasurer ",
            imageURL: "/portraits/vinuja.webp",
            externalLinks: {
                linkedin: "https://www.linkedin.com/in/vinuja-jayathilake/",
                instagram: "https://instagram.com/_vinuja_?igshid=MWZjMTM2ODFkZg==",
            },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Devmal Wijesinghe",
            role: "Director of Events ",
            imageURL: "/portraits/devmal.jpg",
            externalLinks: {
                linkedin: "https://www.linkedin.com/in/devmalwije/",
                instagram: "https://instagram.com/devmal.__?igshid=MWZjMTM2ODFkZg==",
            },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
    3: [
        {
            name: "Media Directors",
            underlings: [],
            members: [
                {
                    name: "Ravindu Senarathna",
                    role: "Director of PR & Media",
                    imageURL: "/portraits/ravindu.webp",
                    occupations: ["A person"],
                    externalLinks: {
                        linkedin: "https://www.linkedin.com/in/ravindusenrathna",
                        instagram: "https://instagram.com/mrrevengerx?igshid=MWZjMTM2ODFkZg==",
                    },
                },
                {
                    name: "Pasan Deshapriya",
                    role: "Director of PR & Media",
                    imageURL: "/portraits/punsara.jpg",
                    occupations: ["Ensuring everyone has a blast 👌"],
                    externalLinks: {
                        linkedin: "https://www.linkedin.com/in/pasan-deshapriya-163671267/",
                    },
                },
            ],
        },
        {
            name: "Manupa Samarawickrama",
            role: "Director of IT",
            imageURL: "/portraits/manupa.jpg",
            externalLinks: {
                linkedin: "https://www.linkedin.com/in/manupa-samarawickrama/",
                instagram: "https://instagram.com/__manupa__?igshid=MWZjMTM2ODFkZg==",
            },
            occupations: ["Software Engineer", "UI/UX Designer"],
            underlings: [
                {
                    name: "Rachala Ovin",
                    imageURL: "/portraits/rachala.webp",
                    occupations: ["SvelteKit in prod when?"],
                },
                {
                    name: "Chamidu Amarasinghe",
                    imageURL: "/portraits/chamidu.jpg",
                    occupations: ["Software Engineer", "UI/UX Designer"],
                },
                {
                    name: "Afeef Razick",
                    imageURL: "/portraits/afeef.jpg",
                    occupations: ["Jiyuu 🕊️"],
                },
            ],
        },
        {
            name: "Abrar Ahmed",
            role: "Director Membership & Club Growth",
            imageURL: "/portraits/abrar.webp",
            externalLinks: { linkedin: "https://www.linkedin.com/in/abrar-ahmed-028368255/" },
            occupations: ["Computer Science Enthusiast. Linux Enthusiast. Loves FOSS."],
        },
        {
            name: "Shakthi Warnakulasuriya",
            role: "Editor",
            imageURL: "/portraits/Shakthi.webp",
            externalLinks: {
                linkedin: "https://www.linkedin.com/in/shakthi-warnakulasuriya-/",
                instagram: "https://www.instagram.com/_shakthi_raveen_/",
            },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
};

export const developers: Member[] = [
    {
        name: "Rachala Ovin",
        role: "Developer",
        imageURL: "/portraits/rachala.webp",
        externalLinks: { linkedin: "https://lk.linkedin.com/in/curstantine" },
        occupations: ["SvelteKit in prod when?"],
    },
    {
        name: "Chamidu Amarasinghe",
        role: "UI/UX Designer",
        imageURL: "/portraits/chamidu.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/chamidu-amarasinghe-87a83b1b0/" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Afeef Razick",
        role: "Developer",
        imageURL: "/portraits/afeef.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/afeef-razick/" },
        occupations: ["Jiyuu 🕊️"],
    },
    {
        name: "Ravindu Senarathna",
        role: "Developer",
        imageURL: "/portraits/ravindu.webp",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/ravindusenrathna",
            instagram: "https://instagram.com/mrrevengerx?igshid=MWZjMTM2ODFkZg==",
        },
        occupations: ["A person"],
    },
];

export const wifBoard: WIFBoardOfficial[] = [
    {
        name: "Bhagya Semage",
        imageURL: "/portraits/Bhagya.jpg",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/",
            instagram: "https://instagram.com/s.e.m.a.g.e.02?igshid=MWZjMTM2ODFkZg==",
        },
    },
    {
        name: "Stefania Hapuarachchi",
        imageURL: "/portraits/Stef.webp",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/stefania-hapuarachchi/",
            instagram: "https://instagram.com/_____shavini_____?igshid=MWZjMTM2ODFkZg==",
        },
    },
    {
        name: "Buddhima Fernando",
        imageURL: "/portraits/buddhima.jpg",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/buddhima-fernando/",
            instagram: "https://instagram.com/buddhima_fernando?igshid=MWZjMTM2ODFkZg==",
        },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/Nadul.webp",
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/nadul-jayasundera-616021257/",
            instagram: "https://instagram.com/nadul.j?igshid=MWZjMTM2ODFkZg==",
        },
    },
];

export const projects: Project[] = [
    {
        name: "OpenHack 3.0",
        accent: "light",
        imageURL: "/projects/openhack3.png",
        date: new Date("2023-12-1"),
    },
    {
        name: "Summer Bootcamp",
        accent: "dark",
        imageURL: "/projects/summer-bootcamp.png",
        date: new Date("2023-08-14"),
    },
    { name: "Her.exe", accent: "light", imageURL: "/projects/her-exe.png", date: new Date() },
];
