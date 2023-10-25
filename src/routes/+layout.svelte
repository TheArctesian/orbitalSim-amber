<script>
    import "../app.css"
</script>


<div class="wrapper">
    <div class="Link">
        <a href="/">Home</a>
    </div>
    <div class="Link">
        <a href="/Simulation">Simulation</a>
    </div>
    <div class="Link">
        <a href="/Description">Description</a>
    </div>
    <div class="Link">
        <a href="/About">About</a>
    </div>
</div>

<slot/> 


<style>
    :global(body) {
        background-image: url("../lib/bg.png");
        background-size: cover;
    }
    div{
        color: white;
    }
    .wrapper{
        display: flex;
        margin: auto;
        width: max-content;
    }
    .Link{
        margin: 1rem;
    }
</style>