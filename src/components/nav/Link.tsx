"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    href: string;
    label: string;
};

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`hover:underline hover:underline-offset-4 ${
                clsx({
                    "text-accent-dark font-bold": pathname === href,
                })
            }`}
        >
            {label}
        </Link>
    );
}
