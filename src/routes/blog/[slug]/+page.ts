import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const post = await import(`../../../blogs/${params.slug}.md`);
    const blogPost: App.BlogPost = post.metadata;

    return {
        content: post.default,
        blogPost: {
            ...blogPost
        }
    };
};