import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
import { l as logo } from "../../chunks/Logo.js";
const info = "/_app/immutable/assets/info.5a349c6f.png";
const paper = "/_app/immutable/assets/paper.4292b2c8.png";
const planet = "/_app/immutable/assets/planet.06ae2965.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-size:cover}div.svelte-q7uua6{color:white}.wrapper.svelte-q7uua6{display:flex;margin:auto;width:max-content}.Link.svelte-q7uua6{margin:1rem;display:flex}a.svelte-q7uua6{display:flex;margin:auto;flex-direction:column;text-align:center;transition:all ease-in-out 200ms;text-decoration:none;color:white}img.svelte-q7uua6{margin:1rem;width:5vw}a.svelte-q7uua6:hover{transition:all ease-in-out 200ms;color:var(--blue)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-q7uua6" data-svelte-h="svelte-1qwo840"><div class="Link svelte-q7uua6"><a href="/" class="svelte-q7uua6"><img${add_attribute("src", logo, 0)} class="svelte-q7uua6">
      Home</a></div> <div class="Link svelte-q7uua6"><a href="/Simulation" class="svelte-q7uua6"><img${add_attribute("src", planet, 0)} class="svelte-q7uua6">
      Simulation</a></div> <div class="Link svelte-q7uua6"><a href="/Description" class="svelte-q7uua6"><img${add_attribute("src", paper, 0)} class="svelte-q7uua6">
      Description</a></div> <div class="Link svelte-q7uua6"><a href="/About" class="svelte-q7uua6"><img${add_attribute("src", info, 0)} class="svelte-q7uua6">
      About</a></div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
