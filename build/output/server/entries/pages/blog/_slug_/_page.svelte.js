import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `   <div class="md:px-18 container mx-auto flex flex-col pt-16 font-inter lg:px-32 xl:px-64"> <div class="mb-10 text-white text-shadow pt-0 px-2 sm:px-5 md:px-10 flex flex-col"><p class="text-pictonblue mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0">${escape(data.blogPost.title)}</p> <p class="date mb-5 md:text-4xl sm:text-3xl text-2xl">${escape(new Date(data.blogPost.date).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }))}</p> <hr> <article class="prose prose-maincolors w-full rounded-md p-5 font-inter bg-blackalpha text-platinum max-w-full">${data.blogPost.editDate ? `<div class="flex flex-row justify-items-center"><p class="text-pictonblue italic font-inter font-bold mr-1" data-svelte-h="svelte-z41iba">Last edited on:</p> <p class="date my-auto italic">${escape(new Date(data.blogPost.editDate).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }))}</p></div>` : ``} ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article></div></div>`;
});
export {
  Page as default
};
