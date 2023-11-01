

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Simulation/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c7d29375.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.d9e6f7aa.js"];
export const stylesheets = ["_app/immutable/assets/5.4057db65.css"];
export const fonts = [];
