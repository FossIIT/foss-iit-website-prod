import type { Event, Member, MemberUnion, Project } from "@/types/internal";

const PEOPLE = {
    "sahan": {
        name: "Sahan Dissanayake",
        role: "President",
        imageURL: "/portraits/Sahan.jpg",
        bio: [
            "Undergraduate trainee - Software Engineering @ IFS R&D ",
            "Software engineering undergraduate  @ IIT",
        ],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/sahan-dissanayake-82291516a/",
            instagram: "https://instagram.com/sahandissanayakeee?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "sachith": {
        name: "Sachith Wickramasekara",
        role: "Vice President",
        imageURL: "/portraits/sachith.webp",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/sachith-wickramasekara/",
            instagram: "https://instagram.com/sach.cha_?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "bagya": {
        name: "Bhagya Semage",
        role: "Secretary",
        imageURL: "/portraits/Bhagya.jpg",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/",
            instagram: "https://instagram.com/s.e.m.a.g.e.02?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "vinuja": {
        name: "Vinuja Jayathilake",
        role: "Treasurer",
        imageURL: "/portraits/vinuja.webp",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/vinuja-jayathilake/",
            instagram: "https://instagram.com/_vinuja_?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "devmal": {
        name: "Devmal Wijesinghe",
        role: "Director of Events",
        imageURL: "/portraits/devmal.jpg",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/devmalwije/",
            instagram: "https://instagram.com/devmal.__?igshid=MWZjMTM2ODFkZg==",
        },
    },

    "ravindu": {
        name: "Ravindu Senarathna",
        role: "Director of PR & Media",
        imageURL: "/portraits/ravindu.webp",
        bio: ["A person"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/ravindusenrathna",
            instagram: "https://instagram.com/mrrevengerx?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "pasan": {
        name: "Pasan Deshapriya",
        role: "Director of PR & Media",
        imageURL: "/portraits/punsara.jpg",
        bio: ["Ensuring everyone has a blast 👌"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/pasan-deshapriya-163671267/",
        },
    },

    "manupa": {
        name: "Manupa Samarawickrama",
        role: "Director of IT",
        imageURL: "/portraits/manupa.jpg",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/manupa-samarawickrama/",
            instagram: "https://instagram.com/__manupa__?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "abrar": {
        name: "Abrar Ahmed",
        role: "Director Membership & Club Growth",
        imageURL: "/portraits/abrar.webp",
        bio: ["Computer Science Enthusiast. Linux Enthusiast. Loves FOSS."],
        externalLinks: { linkedin: "https://www.linkedin.com/in/abrar-ahmed-028368255/" },
    },
    "shakthi": {
        name: "Shakthi Warnakulasuriya",
        imageURL: "/portraits/Shakthi.webp",
        role: "Editor",
        bio: ["Software Engineer", "UI/UX Designer"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/shakthi-warnakulasuriya-/",
            instagram: "https://www.instagram.com/_shakthi_raveen_/",
        },
    },

    "stefania": {
        name: "Stefania Hapuarachchi",
        imageURL: "/portraits/Stef.webp",
        role: "",
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/stefania-hapuarachchi/",
            instagram: "https://instagram.com/_____shavini_____?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "buddhima": {
        name: "Buddhima Fernando",
        imageURL: "/portraits/buddhima.jpg",
        role: "",
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/buddhima-fernando/",
            instagram: "https://instagram.com/buddhima_fernando?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "nadul": {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/Nadul.webp",
        role: "",
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/nadul-jayasundera-616021257/",
            instagram: "https://instagram.com/nadul.j?igshid=MWZjMTM2ODFkZg==",
        },
    },

    "rachala": {
        name: "Rachala Ovin",
        role: "Developer",
        imageURL: "/portraits/rachala.webp",
        externalLinks: { linkedin: "https://linkedin.com/in/curstantine" },
        bio: ["Bird-brained SWE, designer"],
    },
    "chamidu": {
        name: "Chamidu Amarasinghe",
        role: "UI/UX Designer",
        imageURL: "/portraits/chamidu.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/chamidu-amarasinghe-87a83b1b0/" },
        bio: ["Software Engineer", "UI/UX Designer"],
    },
    "afeef": {
        name: "Afeef Razick",
        role: "Developer",
        imageURL: "/portraits/afeef.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/afeef-razick/" },
        bio: ["Jiyuu 🕊️"],
    },
} satisfies Record<string, Member>;

export const MEMBER_BOARD: Record<0 | 1 | 2 | 3, MemberUnion | MemberUnion[]> = {
    0: PEOPLE.sahan,
    1: PEOPLE.sachith,
    2: [
        PEOPLE.bagya,
        PEOPLE.vinuja,
        PEOPLE.devmal,
    ],
    3: [
        {
            name: "Media Directors",
            underlings: [],
            members: [
                PEOPLE.ravindu,
                PEOPLE.pasan,
            ],
        },
        {
            ...PEOPLE.manupa,
            underlings: [
                {
                    name: PEOPLE.rachala.name,
                    imageURL: PEOPLE.rachala.imageURL,
                },
                {
                    name: PEOPLE.chamidu.name,
                    imageURL: PEOPLE.chamidu.imageURL,
                },
                {
                    name: PEOPLE.afeef.name,
                    imageURL: PEOPLE.afeef.imageURL,
                },
            ],
        },
        PEOPLE.abrar,
        PEOPLE.shakthi,
    ],
};

export const DEVELOPERS: Member[] = [
    PEOPLE.rachala,
    PEOPLE.chamidu,
    PEOPLE.afeef,
    PEOPLE.ravindu,
];

export const WIF_BOARD: Member[] = [
    PEOPLE.bagya,
    PEOPLE.stefania,
    PEOPLE.buddhima,
    PEOPLE.nadul,
];

const ALL_EVENTS = {
    OPENHACK_3: {
        name: "OpenHack 3.0",
        imageURL: "/projects/openhack3.png",
        description: ["Brace yourselves, something incredible is on the horizon..."],
        startingDate: new Date("2023-12-30"),
    },
    FLUTTER_BOOTCAMP_2: {
        name: "Flutter Bootcamp 2.0",
        imageURL: "/projects/flutter-bootcamp-2.png",
        description: ["Decoding the magic beyond the screen."],
        startingDate: new Date("2023-12-11"),
    },
    GIT_101: {
        name: "Git 101",
        imageURL: "/projects/git-101.png",
        description: [
            "An interactive GitHub workshop for beginners to master version control in development workflows.",
        ],
        startingDate: new Date("2023-10-19"),
    },
    HER_EXE: {
        name: "her.exe",
        imageURL: "/projects/her-exe.png",
        description: [
            "WIF's podcast series spotlights women in tech, celebrating their achievements, experiences, and personalities.",
        ],
        startingDate: "2024-xx-xx",
    },
    SUMMER_BOOTCAMP_2023: {
        name: "Summer Bootcamp 2023",
        imageURL: "/projects/summer-bootcamp.png",
        description: [
            "This two-day bootcamp empowered students with MERN stack skills to create personal portfolio websites",
        ],
        startingDate: new Date("2023-09-09"),
    },
    OPENHACK_2: {
        name: "OpenHack 2.0",
        imageURL: "/projects/openhack2.webp",
        description: [
            "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022.",
        ],
        startingDate: new Date("2023-02-18"),
    },
    FLUTTER_BOOTCAMP_1: {
        name: "Flutter Bootcamp",
        imageURL: "/projects/flutter-bootcamp.webp",
        description: [
            "Organized by Women in Foss at IIT, Flutter Bootcamp 2022 provided hands-on mobile development training using Flutter.",
        ],
        startingDate: new Date("2022-10-29"),
    },
};

export const PAST_EVENTS: Event[] = [
    ALL_EVENTS.FLUTTER_BOOTCAMP_2,
    ALL_EVENTS.GIT_101,
    ALL_EVENTS.SUMMER_BOOTCAMP_2023,
    ALL_EVENTS.OPENHACK_2,
    ALL_EVENTS.FLUTTER_BOOTCAMP_1,
];

export const EVENT_TIMELINE: Event[] = [
    ALL_EVENTS.HER_EXE,
    // ALL_EVENTS.OPENHACK_3,
];

export const PROJECTS: Project[] = [
    {
        accent: "dark",
        name: ALL_EVENTS.HER_EXE.name,
        imageURL: ALL_EVENTS.HER_EXE.imageURL,
        date: ALL_EVENTS.HER_EXE.startingDate,
    },
];
