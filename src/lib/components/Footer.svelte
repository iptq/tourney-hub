<script>
  const links = [
    { url: "https://github.com/iptq/tourney-hub", name: "source" },
    { url: "https://kit.svelte.dev", name: "svelte" },
  ];
</script>

<hr />
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
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      45deg, 
      var(--bg-color-2) 25%, 
      var(--bg-color-3) 25%, 
      var(--bg-color-3) 50%, 
      var(--bg-color-2) 50%, 
      var(--bg-color-2) 75%, 
      var(--bg-color-3) 75%, 
      var(--bg-color-3) 100%);
    background-size: 33.94px 33.94px;
  }

  div.container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color-2);
  }
  
  div.footer-links {
    display: flex;
    margin: auto var(--pad-size);
    gap: var(--pad-size);
    text-transform: capitalize;
  }
</style>
