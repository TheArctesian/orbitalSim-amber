

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.14c31466.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.d9e6f7aa.js","_app/immutable/chunks/Logo.7543fa1d.js"];
export const stylesheets = ["_app/immutable/assets/2.67131c9e.css","_app/immutable/assets/Logo.7b2426c1.css"];
export const fonts = [];
