import { c as create_ssr_component, b as subscribe, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `  <div class="flex flex-col sm:w-100 p-0 mx-2 sm:px-5 md:px-16 sm:m-auto pt-16 font-inter items-center">${each(data.posts, (blogPost) => {
    return `<a href="${escape($page.url.pathname, true) + "/" + escape(blogPost.slug, true)}" class="container flex flex-col align-items-center justify-items-center md:flex-row bg-blackalpha rounded-md text-white hover:border-pictonblue hover:border-b-4"><div class="container flex flex-col text-1xl md:text-2xl p-5"><p class="date mb-2 text-2xl md:text-3xl">${escape(blogPost.date)}</p> <h1 class="mb-2 text-3xl md:text-5xl lg:text-6xl font-bold">${escape(blogPost.title)}</h1> <p class="lg:text-2xl">${escape(blogPost.description)}</p></div> <div class="relative h-96 w-full md:h-auto md:basis-1/2"><img class="mt-5 sm:mt-0 mx-0 absolute w-full h-full object-cover sm:rounded-md"${add_attribute("src", blogPost.thumbnail, 0)}></div> </a>`;
  })}</div>`;
});
export {
  Page as default
};