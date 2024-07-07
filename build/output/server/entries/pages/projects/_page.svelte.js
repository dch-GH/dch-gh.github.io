import { c as create_ssr_component, f as each, v as validate_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { I as InfoCard } from "../../../chunks/InfoCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="flex flex-col w-1/2 items-center mx-auto my-16"><section class="w-full flex flex-col gap-10 font-inter text-shadow">${each(data.projects, (project) => {
    return `<ul>${validate_component(InfoCard, "InfoCard").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-row items-center"><h2 class="text-3xl font-bold mb-2">${escape(project.title)}</h2> ${project.link ? `<a class="text-2xl mx-2 hover:scale-125 duration-200"${add_attribute("href", project.link, 0)} target="_blank">🔗</a>` : ``}</div> <p class="date mb-5 md:text-[1.5em] sm:text-3xl text-2xl">${escape(new Date(project.date).toLocaleString("en-us", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }))}</p> <p class="text-md sm:text-xl">${escape(project.description)}</p> `;
      }
    })} </ul>`;
  })}</section></div>`;
});
export {
  Page as default
};
