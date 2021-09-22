<script>
  export let frontUrl;
  export let mappoolsUrl;
  export let playersUrl;

  export let highlight;
</script>

<div class="container">
  {#if highlight == "Front"}
    <a class="highlight" href={frontUrl}>Front</a>
  {:else}
    <a href={frontUrl}>Front</a>
  {/if}

  {#if highlight == "Mappools"}
    <a class="highlight" href={mappoolsUrl}>Mappools</a>
  {:else}
    <a href={mappoolsUrl}>Mappools</a>
  {/if}

  {#if highlight == "Players"}
    <a class="highlight" href={playersUrl}>Players</a>
  {:else}
    <a href={playersUrl}>Players</a>
  {/if}
</div>

<style>
  div {
    text-align: center;
    box-shadow: inset 0px -1px 0px 0px var(--accent-color), 0 1px 2px rgba(0, 0, 0, 0.24),
      0 1px 3px rgba(0, 0, 0, 0.12);

    background-color: var(--lighter-bg-color);
    padding: 1rem;

    border-radius: 4px;
    margin-top: 1rem;
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
