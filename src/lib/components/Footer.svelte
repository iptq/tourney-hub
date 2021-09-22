<script>
  const links = [
    { url: "https://kit.svelte.dev", name: "svelte" },
    { url: "https://osu.technology", name: "ਤਕਨਾਲੋਜੀ" },
  ];
</script>

<div class="wrapper">
  <div class="container">
    <ul>
      {#each links as link}
        <li><a href={link.url}>{link.name}</a></li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .wrapper {
    height: 100%;

    background-color: var(--lighter-bg-color);
    border-top: 1px solid var(--even-lighter-bg-color);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 1rem 0rem;
    text-align: center;
    overflow: hidden;
  }

  li {
    display: inline-block;
    padding: 0rem 1rem;
  }

  li a {
    margin: 0 auto;
    color: var(--main-font-color);
  }
  li a:hover {
    text-decoration: none;
  }
</style>
