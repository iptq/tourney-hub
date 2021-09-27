<script>
  export let links;
  export let highlight;
</script>

<div class="card-nav">
  {#each links as link}
    {#if highlight == link.name}
      <a class="highlight" href={link.url}>{link.name}</a>
    {:else}
      <a href={link.url}>{link.name}</a>
    {/if}
  {/each}
</div>
<hr />

<style>
  div.card-nav {
    display: flex;
    flex-direction: row;
    background-color: var(--bg-color-3);
  }

  a {
    padding: var(--dense-pad-size) var(--pad-size);
    height: 100%;
    color: var(--main-font-color);
    opacity: var(--faded-opacity);
    text-transform: capitalize;
  }
  a:hover {
    text-decoration: none;
    opacity: 1;
  }

  a.highlight {
    opacity: 1;
    box-shadow: inset 0 -2px 0 0 var(--accent-color);
  }
</style>
