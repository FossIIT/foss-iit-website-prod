// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Blog → Tags*
 */
export interface BlogDocumentDataTagsItem {
    /**
     * Label field in *Blog → Tags*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.tags[].label
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    label: prismic.KeyTextField;
}

/**
 * Item in *Blog → Authors*
 */
export interface BlogDocumentDataAuthorsItem {
    /**
     * Image field in *Blog → Authors*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.authors[].image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;

    /**
     * Name field in *Blog → Authors*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.authors[].name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    name: prismic.KeyTextField;
}

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
    /**
     * Title field in *Blog*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Description field in *Blog*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    description: prismic.KeyTextField;

    /**
     * Publication Date field in *Blog*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.publication_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#date
     */
    publication_date: prismic.DateField;

    /**
     * Cover Image field in *Blog*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.cover_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    cover_image: prismic.ImageField<never>;

    /**
     * Tags field in *Blog*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.tags[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    tags: prismic.GroupField<Simplify<BlogDocumentDataTagsItem>>;

    /**
     * Authors field in *Blog*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.authors[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    authors: prismic.GroupField<Simplify<BlogDocumentDataAuthorsItem>>;

    /**
     * Content field in *Blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    content: prismic.RichTextField;

    /**
     * Slice Zone field in *Blog*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
    Simplify<BlogDocumentData>,
    "blog",
    Lang
>;

export type AllDocumentTypes = BlogDocument;

declare module "@prismicio/client" {
    interface CreateClient {
        (
            repositoryNameOrEndpoint: string,
            options?: prismic.ClientConfig,
        ): prismic.Client<AllDocumentTypes>;
    }

    interface CreateWriteClient {
        (
            repositoryNameOrEndpoint: string,
            options: prismic.WriteClientConfig,
        ): prismic.WriteClient<AllDocumentTypes>;
    }

    interface CreateMigration {
        (): prismic.Migration<AllDocumentTypes>;
    }

    namespace Content {
        export type {
            AllDocumentTypes,
            BlogDocument,
            BlogDocumentData,
            BlogDocumentDataAuthorsItem,
            BlogDocumentDataSlicesSlice,
            BlogDocumentDataTagsItem,
        };
    }
}
