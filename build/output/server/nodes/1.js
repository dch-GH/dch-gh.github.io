

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.28sg0kO5.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.BH9QoNPY.js"];
export const stylesheets = [];
export const fonts = [];
