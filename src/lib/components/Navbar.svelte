<script>
  import logo from "$lib/components/logo.svg";
  import { session } from "$app/stores";

  let links = [
    {
      url: "/tournaments",
      name: "tournaments",
    },
  ];
</script>

<nav>
  <div class="container">
    <div>
      <a class="nav-link brand" href="/">
        <img class="logo" src={logo} alt="logo" />
        <span>osutourney</span>
      </a>
      {#each links as link}
        <a class="nav-link nav-left" href={link.url}>
          {link.name}
        </a>
      {/each}
    </div>
    <div>
      {#if $session.isLoggedIn}
        <a class="nav-link nav-right" href="/user/{$session.user.osu_id}"
          >{$session.user.username}</a
        >
      {:else}
        <a class="nav-link nav-right" href="/auth/login">Login</a>
      {/if}
    </div>
  </div>
</nav>

<style>
  nav {
    /* background-color: var(--bg-color-2); */
    border-bottom: 1px solid var(--bg-color-4);
    margin-bottom: var(--pad-size);
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
  nav > div.container {
    background-color: var(--bg-color-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--pad-size) var(--dense-pad-size);
  }

  nav > div.container > div {
    display: flex;
    flex-direction: row;
  }

  nav > div.container a.nav-link {
    padding: var(--dense-pad-size) var(--pad-size);
    text-decoration: none;
    color: var(--main-font-color);
    text-transform: uppercase;
  }
  nav > div.container a.nav-link:not(.brand) {
    padding: var(--pad-size);
  }

  nav > div.container a.nav-link:hover {
    box-shadow: inset 0 -3px 0 0 var(--accent-color);
  }

  a.brand {
    font-weight: bold;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  a.brand > img.logo {
    width: 2rem;
    height: 2rem;
  }

  .nav-left {
    flex-direction: row;
    align-self: flex-start;
  }
  .nav-right {
    align-self: flex-end;
    flex-direction: row-reverse;
  }
</style>
