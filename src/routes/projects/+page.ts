import type { PageLoad } from './$types';

const current: App.Project = {
    title: "🕺DBM",
    description: "Idea that came to me while on a walk listening to music.",
    date: "Feb 26 2025",
    link: "",
    image: "",
};

const emoji_roguelike: App.Project = {
    title: "🧍 Emoji Roguelike",
    description: "Something about dungeons and crawling them. This didn't pan out... ☠️",
    date: "May 25 2024",
    link: "",
    image: "",
};

const mir: App.Project = {
    title: "🛑 Madness Interactive Reloaded",
    description: "I worked on various parts of MIR, but more notably: improved upon/created dev tools and editors, lots of bugfixing, and writing tests and documentation.",
    date: "March 28 2023",
    link: "https://studiominus.nl/madness-interactive-reloaded.html",
    image: "",
}

const pjp23: App.Project = {
    title: "🌸 Project BLOOM",
    description: "Made for PJP Game Jam 2023-2. I teamed up with 2 complete strangers to create a game in 3 days. You cultivate plants on a space station to produce oxygen and sell for market.",
    date: "November 2023",
    link: "https://itch.io/jam/pjp-game-jam-2023-2",
    image: "",
}

export const load: PageLoad = async ({ params }) => {
    const projects: App.Project[] = [current, emoji_roguelike, mir, pjp23];
    return {
        projects
    };
};