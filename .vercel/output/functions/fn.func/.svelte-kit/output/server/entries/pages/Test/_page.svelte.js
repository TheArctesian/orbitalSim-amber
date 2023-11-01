import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "d3";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="orbit"></div> <select><option value="Mercury" data-svelte-h="svelte-1x22evs">Mercury</option><option value="Venus" data-svelte-h="svelte-ifxuxc">Venus</option><option value="Earth" data-svelte-h="svelte-1qn85xu">Earth</option><option value="Mars" data-svelte-h="svelte-lyf412">Mars</option><option value="Jupiter" data-svelte-h="svelte-ilcf88">Jupiter</option><option value="Saturn" data-svelte-h="svelte-j1gzce">Saturn</option><option value="Uranus" data-svelte-h="svelte-1tkihtq">Uranus</option><option value="Neptune" data-svelte-h="svelte-q8r5es">Neptune</option></select>`;
});
export {
  Page as default
};
