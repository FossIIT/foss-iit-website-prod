import type { FC } from "react";

import { createClient } from "@/prismicio";

import BlogCard from "@/components/cards/BlogCard";
import HeroLayout from "@/components/hero/HeroLayout";

export default function Blogs() {
    return (
        <>
            <Hero />
            <BlogsList />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div
            className="relative h-screen max-h-5xl flex items-center justify-between"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <HeroLayout
                title="OUR BLOGS"
                subtitle={["EXPLORE THE LATEST INSIGHTS AND TRENDS", "IN UI/UX DESIGN"]}
            />
        </div>
    );
};

const BlogsList: FC = async () => {
    const client = createClient();
    const blogs = await client.getAllByType("blog", {
        graphQuery: `{
                blog {
                    title
                    description
                    publication_date
                    cover_image
                    tags
                    authors
                }
            }`,
        orderings: [
            { field: "blog.publication_date", direction: "desc" },
        ],
    });

    return (
        <ul className="grid grid-cols-1 mb-24 gap-6 sm:grid-cols-[repeat(auto-fill,24rem)]">
            {blogs.map((blog) => (
                <li key={blog.id}>
                    <BlogCard
                        id={blog.uid}
                        title={blog.data.title}
                        cover_image={blog.data.cover_image}
                        publication_date={blog.data.publication_date}
                        authors={blog.data.authors}
                        tags={blog.data.tags}
                        description={blog.data.description}
                    />
                </li>
            ))}
        </ul>
    );
};
