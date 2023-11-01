

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/About/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.81da337f.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.d9e6f7aa.js"];
export const stylesheets = ["_app/immutable/assets/3.b88e0c29.css"];
export const fonts = [];
