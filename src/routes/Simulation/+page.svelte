<script>
  const GravConstant = 6.67 * 10 ** -11; // Big G
  let PlanetMass = 1000,
    SatMass = 1000,
    Radius = 1000;
  let Velocity= calcVelocity();
  let KE = calcKE();
  let PE = calcPE();
  let TE = calcTE();

  $: {
    Velocity = calcVelocity();
    KE = calcKE();
    PE = calcPE();
    TE = calcTE();
  }
  function calcVelocity() {
    return Math.sqrt((2 * calcKE()) / SatMass);
  }

  function calcKE() {
    return (GravConstant * PlanetMass * SatMass) / (2 * Radius);
  }

  function calcPE() {
    return -(GravConstant * PlanetMass * SatMass) / Radius;
  }

  function calcTE() {
    return calcKE() + calcPE();
  }
</script>

<div>
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>

  <label>
    Planet Mass:
    <input
      type="range"
      min="0"
      max="10000000000"
      step="1"
      bind:value={PlanetMass}
    />
  </label>
  <p>{PlanetMass}</p>

  <label>
    Satellite Mass:
    <input
      type="range"
      min="0"
      max="10000000000"
      step="1"
      bind:value={SatMass}
    />
  </label>
  <p>{SatMass}</p>

  <label>
    Radius:
    <input
      type="range"
      min="0"
      max="10000000000"
      step="1"
      bind:value={Radius}
    />
  </label>
  <p>{Radius}</p>

  <p>Velocity: ${Velocity}</p>
  <p>Kinetic Energy: ${KE}</p>
  <p>Potential Energy: ${PE}</p>
  <p>Total Energy: ${TE}</p>
</div>

<style>
  div {
    color: white;
  }
</style>
