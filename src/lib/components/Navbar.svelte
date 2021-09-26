<script>
  import logo from "$lib/components/logo.svg";
  import { session } from "$app/stores";

  let links = [
    {
      url: "/tournaments",
      name: "tournaments",
    },
    {
      url: "/example-tourney",
      name: "example tourney",
    },
  ];
</script>

<div class="nav">
  <div class="container">
    <div class="row">
      <div class="nav-left">
        <a href="/" class="logo">
          <h3>
            <img class="logo" src={logo} alt="logo" />
            tourney hub
          </h3>
        </a>
        <ul>
          {#each links as link}
            <li><a href={link.url}>{link.name}</a></li>
          {/each}
        </ul>
      </div>
      <div>
        <ul>
          {#if $session.isLoggedIn}
            <li>
              <a href="/user/{$session.user.osu_id}">{$session.user.username}</a
              >
            </li>
          {:else}
            <li><a href="/auth/login">Login</a></li>
          {/if}
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  div.nav {
    background-color: var(--lighter-bg-color);
    border-bottom: 1px solid var(--even-lighter-bg-color);
    margin-bottom: 1rem;

    list-style: none;
  }

  div.nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    div.nav-left {
      flex-direction: column;
    }
  }

  div.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  @media screen and (max-width: 600px) {
    div.row {
      flex-direction: column;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    padding: auto;
    display: inline;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    li {
      padding-bottom: 0.5rem;
    }
  }

  a {
    padding: 1rem;
    text-transform: uppercase;
    color: var(--main-font-color);
  }
  a:hover {
    text-decoration: none;
    box-shadow: inset 0px -3px 0px 0px var(--accent-color);
  }

  h3 {
    display: flex;
    align-items: center;

    margin: 0;
  }

  a.logo {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 400;
    margin-right: 20px;
    padding: 10px 0;
  }

  img.logo {
    width: 2rem;
    height: 2rem;

    box-sizing: border-box;
    display: block;
    margin-right: 0.5rem;
  }
</style>
