import * as universal from '../entries/pages/Test/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Test/+page.js";
export const imports = ["_app/immutable/nodes/6.be391ed3.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.d9e6f7aa.js"];
export const stylesheets = [];
export const fonts = [];
