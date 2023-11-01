<script>
  import gh from "$lib/github.png";
</script>

<div>
  <div class="text">
    <p>
      Hello I am Stephen Okita, a student at UC Berkeley. I like to write things and make things, if you want to find out more about me you can find <a class="atxt" href="danielokita.com">here</a>. 
      <br> 
      <br> 
      The github for this project can be found at the link below, feel free to contribute and fix my messy code.
    </p>
  </div>
  <div><a href="https://github.com/TheArctesian/orbitalSim-amber"><img src={gh} /></a></div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    color: white;

    margin: auto;
  }
  .text{
    margin: 10rem;
    margin-bottom: 1rem;
  }
  img{
    background-color: none;
  }
  .atxt {
    background-color: var(--blue);
    text-decoration: none;
    color: black;
  }
</style>
