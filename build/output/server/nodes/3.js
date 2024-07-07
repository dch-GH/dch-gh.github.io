import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DyDEE8pq.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.BH9QoNPY.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.D0fO7m3M.js","_app/immutable/chunks/entry.DDOyAdYp.js","_app/immutable/chunks/paths.dylRzT0-.js"];
export const stylesheets = [];
export const fonts = [];
