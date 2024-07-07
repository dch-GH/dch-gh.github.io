import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)}${add_attribute(
    "class",
    href === $page.url.pathname ? "border-b-[3px] border-pictonblue" : "",
    0
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const bg = "/_app/immutable/assets/bg.BWKwbrPX.png";
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="fixed -left-10 -top-1 -z-20 w-[120%] h-[120%] bg-cover bg-black blur-lg brightness-[0.25] contrast-[85%]" style="${"background-image: url(" + escape(bg, true) + ")"}"></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <nav class="flex justify-content-center sticky top-0 z-50 px-[10%] w-full py-3 font-bold font-inter bg-blackalpha text-platinum justify-center"><div class="flex flex-row text-1xl md:text-2xl w-full mx-auto">${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `🏡 Duston&#39;s Page`;
    }
  })}  <div class="mr-0 ml-auto flex flex-row gap-5">${validate_component(NavLink, "NavLink").$$render($$result, { href: "/blog" }, {}, {
    default: () => {
      return `${escape("Blog")}`;
    }
  })} ${validate_component(NavLink, "NavLink").$$render($$result, { href: "/projects" }, {}, {
    default: () => {
      return `${escape("Projects")}`;
    }
  })}</div></div></nav> ${slots.default ? slots.default({
    class: "relative flex flex-col no-x-scroll"
  }) : ``}`;
});
export {
  Layout as default
};
