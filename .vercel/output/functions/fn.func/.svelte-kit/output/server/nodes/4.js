

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Description/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.be62c3f1.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.d9e6f7aa.js"];
export const stylesheets = ["_app/immutable/assets/4.98a2cc60.css"];
export const fonts = [];
