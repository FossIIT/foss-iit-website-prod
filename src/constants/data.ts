import type { Event, Member, MemberUnion, Project } from "@/types/internal";

import AfeefPortrait from "@/assets/portraits/afeef.jpg";
import AniqaPortrait from "@/assets/portraits/aniqa.jpg";
import AyyoobPortrait from "@/assets/portraits/ayyoob.jpg";
import HeshanPortrait from "@/assets/portraits/heshan.jpg";
import LasanPortrait from "@/assets/portraits/lasan.jpg";
import NadulPortrait from "@/assets/portraits/nadul.jpg";
import NisharaPortrait from "@/assets/portraits/nishara.png";
import RachalaPortrait from "@/assets/portraits/rachala.jpg";
import SavindiPortrait from "@/assets/portraits/savindi.jpg";
import StefaniaPortrait from "@/assets/portraits/stefania.jpg";

import RavinduPortrait from "@/assets/portraits/Old/ravindu.webp";

const PEOPLE = {
    "heshan": {
        name: "Heshan Theekshana",
        role: "President",
        imageURL: HeshanPortrait,
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/heshan-wanigasinghe-65a930263/",
        },
    },
    "stefania": {
        name: "Stefania Hapuarachchi",
        imageURL: StefaniaPortrait,
        role: "Vice President",
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/stefania-hapuarachchi/",
            instagram: "https://instagram.com/_____shavini_____?igshid=MWZjMTM2ODFkZg==",
        },
    },
    "lasan": {
        name: "Lasan Ranatunge",
        role: "Secretary",
        imageURL: LasanPortrait,
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/lasanranatunge/",
        },
    },
    "chathula": {
        name: "Chathula Chamupathi",
        role: "Treasurer",
        imageURL: null,
        bio: [],
        externalLinks: {
            linkedin: "http://www.linkedin.com/in/chathula-chamupathi",
            instagram: "https://www.instagram.com/chathula.aa/",
        },
    },
    "nadul": {
        name: "Nadul Jayasundera",
        imageURL: NadulPortrait,
        role: "Director of Events",
        bio: ["haaaaave ya met heshan? (insta above)"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/nadul-jayasundera-616021257/",
            instagram: "https://www.instagram.com/nadul.j/",
        },
    },
    "ayyoob": {
        name: "Ayyoob Ajward",
        imageURL: AyyoobPortrait,
        role: "Director of PR & Media",
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/ayyoob-ajward/",
            instagram: "https://www.instagram.com/millionmacck/",
        },
    },
    "ashen": {
        name: "Ashen Himeshana",
        role: "Director of PR & Media",
        imageURL: null,
        bio: [],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/ashen-himeshana/",
            instagram: "https://www.instagram.com/4izen_x/",
        },
    },
    "rachala": {
        name: "Rachala Ovin",
        role: "Director of IT",
        imageURL: RachalaPortrait,
        externalLinks: {
            linkedin: "https://linkedin.com/in/curstantine",
            github: "https://github.com/Curstantine",
        },
        bio: ["Generic software engineer"],
    },
    "aniqa": {
        name: "Aniqa Razick",
        role: "Director Membership & Club Growth",
        imageURL: AniqaPortrait,
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/aniqar/",
        },
        bio: [],
    },
    "chamidu": {
        name: "Chamidu Amarasinghe",
        role: "Director of Community Engagement",
        imageURL: null,
        externalLinks: { linkedin: "https://www.linkedin.com/in/chamidu-amarasinghe" },
        bio: ["Software Engineer", "UI/UX Designer"],
    },
    "dilmi": {
        name: "Dilmi Fernando",
        role: "Editor",
        imageURL: null,
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/dilmi-fernando-078a99251",
            instagram: "https://www.instagram.com/dilmi.v/",
        },
        bio: [],
    },

    "tihara": {
        name: "Tihara Egodage",
        role: "Chairperson",
        imageURL: null,
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/tihara-egodage-238596256/",
            instagram: "https://www.instagram.com/tihara.18/",
        },
        bio: [],
    },
    "savindi": {
        name: "Savindi Silva",
        role: "Vice Chairperson",
        imageURL: SavindiPortrait,
        externalLinks: {
            linkedin: "http://www.linkedin.com/in/savindi-silva",
            instagram: "https://www.instagram.com/savindayy?igsh=MTYybnpxMmhjeXZvaw==",
        },
        bio: [],
    },
    "nishara": {
        name: "Nishara Fernando",
        role: "Secretary",
        imageURL: NisharaPortrait,
        externalLinks: {
            linkedin: "http://www.linkedin.com/in/nishara-fernando-526921265",
            instagram: "https://www.instagram.com/nishara.christine/",
        },
        bio: [],
    },

    "afeef": {
        name: "Afeef Razick",
        role: "Developer",
        imageURL: AfeefPortrait,
        externalLinks: { linkedin: "https://www.linkedin.com/in/afeef-razick/" },
        bio: ["Jiyuu 🕊️"],
    },
    // Ex
    // "sahan": {
    //     name: "Sahan Dissanayake",
    //     role: "President",
    //     imageURL: "/portraits/Sahan.jpg",
    //     bio: [
    //         "Undergraduate trainee - Software Engineering @ IFS R&D ",
    //         "Software engineering undergraduate  @ IIT",
    //     ],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/sahan-dissanayake-82291516a/",
    //         instagram: "https://instagram.com/sahandissanayakeee?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    "ravindu": {
        name: "Ravindu Senarathna",
        role: "Ex. Director of PR & Media",
        imageURL: RavinduPortrait,
        bio: ["A person"],
        externalLinks: {
            linkedin: "https://www.linkedin.com/in/ravindusenrathna",
            instagram: "https://instagram.com/mrrevengerx?igshid=MWZjMTM2ODFkZg==",
        },
    },
    // "sachith": {
    //     name: "Sachith Wickramasekara",
    //     role: "Vice President",
    //     imageURL: "/portraits/sachith.webp",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/sachith-wickramasekara/",
    //         instagram: "https://instagram.com/sach.cha_?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    // "bagya": {
    //     name: "Bhagya Semage",
    //     role: "Secretary",
    //     imageURL: "/portraits/Bhagya.jpg",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/",
    //         instagram: "https://instagram.com/s.e.m.a.g.e.02?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    // "vinuja": {
    //     name: "Vinuja Jayathilake",
    //     role: "Treasurer",
    //     imageURL: "/portraits/vinuja.webp",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/vinuja-jayathilake/",
    //         instagram: "https://instagram.com/_vinuja_?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    // "devmal": {
    //     name: "Devmal Wijesinghe",
    //     role: "Director of Events",
    //     imageURL: "/portraits/devmal.jpg",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/devmalwije/",
    //         instagram: "https://instagram.com/devmal.__?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    // "pasan": {
    //     name: "Pasan Deshapriya",
    //     role: "Director of PR & Media",
    //     imageURL: "/portraits/punsara.jpg",
    //     bio: ["Ensuring everyone has a blast 👌"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/pasan-deshapriya-163671267/",
    //     },
    // },
    // "manupa": {
    //     name: "Manupa Samarawickrama",
    //     role: "Director of IT",
    //     imageURL: "/portraits/manupa.jpg",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/manupa-samarawickrama/",
    //         instagram: "https://instagram.com/__manupa__?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
    // "abrar": {
    //     name: "Abrar Ahmed",
    //     role: "Director Membership & Club Growth",
    //     imageURL: "/portraits/abrar.webp",
    //     bio: ["Computer Science Enthusiast. Linux Enthusiast. Loves FOSS."],
    //     externalLinks: { linkedin: "https://www.linkedin.com/in/abrar-ahmed-028368255/" },
    // },
    // "shakthi": {
    //     name: "Shakthi Warnakulasuriya",
    //     imageURL: "/portraits/Shakthi.webp",
    //     role: "Editor",
    //     bio: ["Software Engineer", "UI/UX Designer"],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/shakthi-warnakulasuriya-/",
    //         instagram: "https://www.instagram.com/_shakthi_raveen_/",
    //     },
    // },
    // "buddhima": {
    //     name: "Buddhima Fernando",
    //     imageURL: "/portraits/buddhima.jpg",
    //     role: "",
    //     bio: [],
    //     externalLinks: {
    //         linkedin: "https://www.linkedin.com/in/buddhima-fernando/",
    //         instagram: "https://instagram.com/buddhima_fernando?igshid=MWZjMTM2ODFkZg==",
    //     },
    // },
} satisfies Record<string, Member>;

export const MEMBER_BOARD: Record<0 | 1 | 2 | 3, MemberUnion | MemberUnion[]> = {
    0: PEOPLE.heshan,
    1: PEOPLE.stefania,
    2: [
        PEOPLE.lasan,
        PEOPLE.chathula,
        PEOPLE.nadul,
    ],
    3: [
        { name: "Media Directors", members: [PEOPLE.ayyoob, PEOPLE.ashen] },
        PEOPLE.rachala,
        PEOPLE.aniqa,
        PEOPLE.chamidu,
    ],
};

export const DEVELOPERS: Member[] = [
    PEOPLE.rachala,
    PEOPLE.chamidu,
    PEOPLE.afeef,
    PEOPLE.ravindu,
];

export const WIF_BOARD: Member[] = [
    PEOPLE.tihara,
    PEOPLE.savindi,
    PEOPLE.nishara,
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
];

export const PROJECTS: Project[] = [
    {
        accent: "dark",
        name: ALL_EVENTS.HER_EXE.name,
        imageURL: ALL_EVENTS.HER_EXE.imageURL,
        date: ALL_EVENTS.HER_EXE.startingDate,
    },
];
