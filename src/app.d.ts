// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        interface MdsvexFile {
            default: import('svelte/internal').SvelteComponent;
            metadata: Record<string, string>;
        }

        type MdsvexResolver = () => Promise<MdsvexFile>;

        interface BlogPost {
            slug: string;
            title: string;
            description: string;
            thumbnail: string;
            date: string;
            editDate: string?;
        }

        interface Project {
            title: string,
            description: string,
            date: string,
            link: string?,
            image: string?
        }
    }
}

export { };
