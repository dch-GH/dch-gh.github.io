// @ts-nocheck
import type { PageServerLoad } from './$types';
import path from 'path';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
    const allPostFiles = import.meta.glob("/src/content/blogs/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);

    const posts: App.BlogPost[] = await Promise.all(
        iterablePostFiles.map(async ([filePath, resolver]) => {
            const { metadata }: any = await resolver();
            const { name } = path.parse(filePath);

            return {
                slug: name,
                ...metadata
            };
        })
    );

    return { posts };
};