<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";

  //Image Imports
  import img_sun from "$lib/Planets/sun.png";
  import img_earth from "$lib/Planets/earth.png";
  import img_jupiter from "$lib/Planets/jupiter.png";
  import img_mars from "$lib/Planets/mars.png";
  import img_saturn from "$lib/Planets/saturn.png";
  import img_uranus from "$lib/Planets/uranus.png";
  import img_neptune from "$lib/Planets/neptune.png";
  import img_mercury from "$lib/Planets/mercury.png";
  import img_venus from "$lib/Planets/venus.png";

  const GravConstant = 6.67 * 10 ** -11; // Big G
  let PlanetMass = 2 * 10 ** 30 //Mass of sun
  let SatMass, Radius,Velocity, KE, PE, TE;

  function calcVelocity() {
    Velocity = Math.sqrt((2 * KE) / SatMass);
    return Velocity;
  }

  function calcKE() {
    console.log("I AM BEING CALLED KE");
    KE = (GravConstant * PlanetMass * SatMass) / (2 * Radius);
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
  function callAll() {
    calcKE();
    calcPE();
    calcTE();
    calcVelocity();
  }

  // Calculate KE, PE, and TE before Velocity
  $: KE = calcKE();
  $: PE = calcPE();
  $: TE = calcTE();

  let selectedPlanet = "Earth"; // Default selected planet
  let svgContainer;

  const allPlanets = [
    {
      name: "Mercury",
      radius: 4.879,
      orbit: 57.9 * 1.6,
      color: "gray",
      period: 88,
      img: img_mercury,
    },
    {
      name: "Venus",
      radius: 12.104,
      orbit: 108.2,
      color: "yellow",
      period: 225,
      img: img_venus,
    },
    {
      name: "Earth",
      radius: 12.742,
      orbit: 149.6,
      color: "blue",
      period: 365,
      img: img_earth,
    },
    {
      name: "Mars",
      radius: 6.779,
      orbit: 227.9,
      color: "red",
      period: 687,
      img: img_mars,
    },
    {
      name: "Jupiter",
      radius: 139.2,
      orbit: 778.5 / 3,
      color: "orange",
      period: 4307,
      img: img_jupiter,
    },
    {
      name: "Saturn",
      radius: 116.5,
      orbit: 1433.5 / 3.5,
      color: "brown",
      period: 10754,
      img: img_saturn,
    },
    {
      name: "Uranus",
      radius: 50.724,
      orbit: 2872.5 / 6, //is meant to be 2872.5
      color: "lightblue",
      period: 30660,
      img: img_uranus,
    },
    {
      name: "Neptune",
      radius: 49.244,
      orbit: 4495.1 / 9,
      color: "darkblue",
      period: 60225,
      img: img_neptune,
    },
  ];

  // Reactive statement returns an array containing only the selected planet
  let planets = allPlanets.filter((planet) => planet.name === selectedPlanet);
  $: planets = allPlanets.filter((planet) => planet.name === selectedPlanet);

  let width, height, orbit;

  function createVisualization() {
    const svg = d3
      .select(svgContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    orbit = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Add sun at the center
    orbit
      .append("image")
      .attr("xlink:href", img_sun)
      .attr("x", -100) // Adjust size as needed
      .attr("y", -100) // Adjust size as needed
      .attr("width", 200) // Adjust size as needed
      .attr("height", 200); // Adjust size as needed
    planets.forEach((planet) => {
      orbit
        .append("circle")
        .attr("r", planet.orbit)
        .style("fill", "none")
        .style("stroke", "lightgray");

      const planetCircle = orbit
        .append("image")
        .attr("xlink:href", planet.img)
        .attr("x", -planet.radius )
        .attr("y", -planet.radius )
        .attr("height", planet.radius * 2)
        .attr("width", planet.radius  * 2)
        .attr("transform", `translate(${planet.orbit}, 0)`);

      function animatePlanet() {
        planetCircle
          .transition()
          .duration(planet.period)
          .ease(d3.easeLinear)
          .attrTween("transform", function () {
            return function (t) {
              const rotate = `rotate(${t * 360})`;
              const translate = `translate(${planet.orbit}, 0)`;
              return rotate + " " + translate;
            };
          })
          .on("end", animatePlanet); // restart the animation when it ends
      }

      animatePlanet();
    });
  }

  onMount(() => {
    width = window.outerWidth;
    height = window.outerHeight-0.2*window.outerHeight;
    createVisualization();
  });

  // Clear the SVG and create a new visualization whenever selectedPlanet changes
  $: {
    d3.select("svg").remove();
    createVisualization();
    console.log(planets);
  }
</script>

<div class="wrapper">
  <div class="data">
    <label>
      Planet Mass:
      <input
        type="range"
        min="0"
        max="15"
        step="1"
        bind:value={PlanetMass}
        on:click={callAll}
      />
    </label>
    <p>{PlanetMass}</p>

    <label>
      Satellite Mass:
      <input
        type="range"
        min="0"
        max="15"
        step="1"
        bind:value={SatMass}
        on:click={callAll}
      />
    </label>
    <p>{SatMass}</p>

    <label>
      Radius:
      <input
        type="range"
        min="0"
        max="15"
        step="1"
        bind:value={Radius}
        on:click={callAll}
      />
    </label>
    <p>{planets}</p>
    <p>Velocity: {Velocity}</p>
    <p>Kinetic Energy: {KE}</p>
    <p>Potential Energy: {PE}</p>
    <p>Total Energy: {TE}</p>
    <select bind:value={selectedPlanet}>
      <option value="Mercury">Mercury</option>
      <option value="Venus">Venus</option>
      <option value="Earth">Earth</option>
      <option value="Mars">Mars</option>
      <option value="Jupiter">Jupiter</option>
      <option value="Saturn">Saturn</option>
      <option value="Uranus">Uranus</option>
      <option value="Neptune">Neptune</option>
    </select>
  </div>
  <div class="simulation">
    <div id="orbit" bind:this={svgContainer} />
  </div>
</div>

<style>
  div {
    color: white;
  }
  .simulation{
    margin: auto;
  }
  .data {
    position: absolute;
  }
</style>
