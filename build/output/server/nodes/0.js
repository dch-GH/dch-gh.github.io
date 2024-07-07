import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D9jB0rbZ.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.BH9QoNPY.js","_app/immutable/chunks/stores.D0fO7m3M.js","_app/immutable/chunks/entry.DDOyAdYp.js","_app/immutable/chunks/paths.dylRzT0-.js"];
export const stylesheets = ["_app/immutable/assets/0.BmzzHIYF.css"];
export const fonts = [];
