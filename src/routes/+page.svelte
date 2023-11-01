<script>
  import "../app.css";
  import logo from "../lib/Logo.png";
</script>

<div class="wrapper">
  <div class="text">
    <h1><u>2D</u> Orbital Simulation.</h1>
    This website is designed to visualise and understand the formula that describe
    the orbital motions of bodies. Learning about orbital motion and energies gets
    very confusing. While there are a plethora of textbooks and articles written
    on the subject I wanted to make one to help students and educators visualise
    the phenomena.
    <br />
    <br />
    <hr />
    <br />
    To view the Simulation you can
    <a href="/Simulation">open it here.</a>
    <br />
    For a refresher or introduction into the physics of orbital mechanics go to
    <a href="/Description">this page</a>
    <br />
    For a little information on the person who made this website <a href="About">the about page</a>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    margin: 4rem;
  }
  div {
    color: white;
  }
  .text {
    margin: auto;
    padding: 4rem;
    font-size: medium;
    width: 50vw;
  }
  h1 {
    text-align: center;
  }
  a {
    background-color: var(--blue);
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: white;
  }
</style>
