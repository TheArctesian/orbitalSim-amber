import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-u4lipi{color:white}.wrapper.svelte-u4lipi{display:flex;margin:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const GravConstant = 6.67 * 10 ** -11;
  let PlanetMass = 2 * 10 ** 30, SatMass = 5.982 * 10 ** 24, Radius = 150 * 10 ** 3;
  let Velocity, KE, PE, TE;
  function calcVelocity() {
    Velocity = Math.sqrt(2 * KE / SatMass);
    return Velocity;
  }
  function calcKE() {
    console.log("I AM BEING CALLED KE");
    KE = GravConstant * PlanetMass * SatMass / (2 * Radius);
    return KE;
  }
  function calcPE() {
    PE = -(GravConstant * PlanetMass * SatMass) / Radius;
    return PE;
  }
  function calcTE() {
    TE = KE + PE;
    return TE;
  }
  $$result.css.add(css);
  KE = calcKE();
  PE = calcPE();
  TE = calcTE();
  Velocity = calcVelocity();
  return `<div class="wrapper svelte-u4lipi"><div class="data svelte-u4lipi"><label>Planet Mass:
      <input type="range" min="0" max="10000000000" step="1"${add_attribute("value", PlanetMass, 0)}></label> <p>${escape(PlanetMass)}</p> <label>Satellite Mass:
      <input type="range" min="0" max="10000000000" step="1"${add_attribute("value", SatMass, 0)}></label> <p>${escape(SatMass)}</p> <label>Radius:
      <input type="range" min="0" max="10000000000" step="1"${add_attribute("value", Radius, 0)}></label> <p>${escape(Radius)}</p> <p>Velocity: ${escape(Velocity)}</p> <p>Kinetic Energy: ${escape(KE)}</p> <p>Potential Energy: ${escape(PE)}</p> <p>Total Energy: ${escape(TE)}</p></div> <div class="simulation svelte-u4lipi" data-svelte-h="svelte-sr6ro6"><h1>simulation here</h1></div> </div>`;
});
export {
  Page as default
};
