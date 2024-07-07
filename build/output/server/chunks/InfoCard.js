import { c as create_ssr_component } from "./ssr.js";
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container flex flex-col w-100 bg-blackalpha text-platinum p-5 rounded-lg">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  InfoCard as I
};
