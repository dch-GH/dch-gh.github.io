import { getAllBlogs } from "$lib/util";
import { Feed } from "feed"
export const prerender = true

function removeCDATA(xml: string): string {
    return xml.replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1");
}

export async function GET() {
    return getAllBlogs().then((blogs) => {
        const feed = new Feed({
            title: "duston's Page",
            id: "",
            link: "http://dch-gh.github.io",
            feedLinks: {
                rss: "http://dch-gh.github.io\\rss.xml"
            },
            copyright: `Copyright ${new Date().getFullYear().toString()}, Duston`
        });

        for (const post of blogs.posts) {
            feed.addItem({
                title: post.title,
                description: post.description,
                date: new Date(post.date), link: `http://dch-gh.github.io\\blog\\${post.slug}`
            });
        }

        const result = feed.rss2();
        const filtered = removeCDATA(result);
        return new Response(filtered, {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
            },
        });
    }).catch((err) => {
        return new Response(err);
    });
}