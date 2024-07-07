const current = {
  title: "🧍 Current Project",
  description: "Something about dungeons and crawling them",
  date: "May 25 2024",
  link: "",
  image: ""
};
const mir = {
  title: "🛑 Madness Interactive Reloaded",
  description: "I worked on various parts of MIR, but more notably: improved upon/created dev tools and editors, lots of bugfixing, and writing tests and documentation.",
  date: "March 28 2023",
  link: "",
  image: ""
};
const pjp23 = {
  title: "🌸 Project BLOOM",
  description: "Made for PJP Game Jam 2023-2. I teamed up with 2 complete strangers to create a game in 3 days. You cultivate plants on a space station to produce oxygen and sell for market.",
  date: "November 2023",
  link: "https://itch.io/jam/pjp-game-jam-2023-2",
  image: ""
};
const load = async ({ params }) => {
  const projects = [current, mir, pjp23];
  return {
    projects
  };
};
export {
  load
};
