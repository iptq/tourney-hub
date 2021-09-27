<script>
  const links = [
    { url: "https://github.com/iptq/tourney-hub", name: "source" },
    { url: "https://kit.svelte.dev", name: "svelte" }
  ];
</script>

<hr>
<footer>
  <div class="container">
    <div class="footer-links">
      {#each links as link}
        <a href={link.url}>{link.name}</a>
      {/each}
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--bg-color-2);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  div.footer-links {
    display: flex;
    gap: var(--pad-size);
    text-transform: capitalize;
  }
</style>
