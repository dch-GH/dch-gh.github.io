import * as universal from '../entries/pages/projects/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.ts";
export const imports = ["_app/immutable/nodes/5.CUxAfwvf.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.BH9QoNPY.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/InfoCard.JKLFWpJu.js"];
export const stylesheets = [];
export const fonts = [];
