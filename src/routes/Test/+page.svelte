<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";

  let selectedPlanet = "Earth"; // Default selected planet
  let svg;

  onMount(async () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const planets = [
      { name: "Mercury", radius: 4.879, orbit: 57.9, color: "gray" },
      { name: "Venus", radius: 12.104, orbit: 108.2, color: "yellow" },
      { name: "Earth", radius: 12.742, orbit: 149.6, color: "blue" },
      { name: "Mars", radius: 6.779, orbit: 227.9, color: "red" },
      { name: "Jupiter", radius: 139.2, orbit: 778.5, color: "orange" },
      { name: "Saturn", radius: 116.5, orbit: 1433.5, color: "brown" },
      { name: "Uranus", radius: 50.724, orbit: 2872.5, color: "lightblue" },
      { name: "Neptune", radius: 49.244, orbit: 4495.1, color: "darkblue" },
    ];

    svg = d3
      .select("#orbit")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    let orbit = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Add sun at the center
    orbit
      .append("circle")
      .attr("r", 20) // Adjust size as needed
      .style("fill", "orange");

    planets.forEach((planet) => {
      if (planet.name !== selectedPlanet) return;

      orbit
        .append("circle")
        .attr("r", planet.orbit)
        .style("fill", "none")
        .style("stroke", "lightgray");

      let planetCircle = orbit
        .append("circle")
        .attr("r", planet.radius)
        .style("fill", planet.color)
        .attr("transform", `translate(${planet.orbit}, 0)`);

      function animatePlanet() {
        planetCircle
          .transition()
          .duration(5000)
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

      console.log(selectedPlanet);
    });
  });
</script>

<div id="orbit" />

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
