<script>
  export let playerUrl;
  export let staffUrl;

  export let highlight;
</script>

<div class="container">
  {#if highlight == "Player"}
    <a class="highlight" href={playerUrl}>Player</a>
  {:else}
    <a href={playerUrl}>Player</a>
  {/if}

  {#if highlight == "Staff"}
    <a class="highlight" href={staffUrl}>Staff</a>
  {:else}
    <a href={staffUrl}>Staff</a>
  {/if}
</div>

<style>
  div {
    text-align: center;
    box-shadow: inset 0px -1px 0px 0px var(--accent-color),
      0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);

    background-color: var(--lighter-bg-color);
    padding: 1rem;

    border-radius: 4px;
  }
  @media screen and (max-width: 600px) {
    div {
      border-radius: 0px;
    }
  }

  a {
    font-family: var(--secondary-font-families);
    text-decoration: none;
    font-weight: bold;
    color: var(--main-font-color);
    padding: 1rem 1rem;
  }
  a:hover,
  a.highlight {
    box-shadow: inset 0px -4px 0px 0px var(--accent-color);
  }
</style>
