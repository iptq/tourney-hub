<script context="module">
  export async function load({ page, fetch }) {
    let id = page.params.id;
    let params = new URLSearchParams({ id });
    let result = await fetch("/api/tournaments/info?" + params);
    let tournament = await result.json();
    if (tournament === null) return { status: 404 };

    return {
      props: { tournament },
    };
  }
</script>

<script lang="ts">
  import CardTitle from "$lib/components/CardTitle.svelte";
  import CardNav from "$lib/components/CardNav.svelte";
  import type { Tournament } from "$lib/models/Tournament";

  export let tournament: Tournament;

  let frontUrl = "/tournaments/" + tournament.id;

  let cardNavLinks = [{
    name: "front",
    url: frontUrl
  }, {
    name: "mappools",
    url: frontUrl
  }, {
    name: "schedules",
    url: frontUrl
  }, {
    name: "standings",
    url: frontUrl
  }, {
    name: "players",
    url: frontUrl
  }, {
    name: "staff",
    url: frontUrl
  }]
  let cardNavHighlight = "front";
</script>

<!-- <details>
  <summary>Tournament JSON</summary>
  <pre>{JSON.stringify(tournament, null, 2)}</pre>
</details> -->

<div class="tournament-container">
  <div class="tournament-header">
    <div class="card banner" style="--bg-img: url({tournament.banner_image})">
      <div class="layer">
        <span class="badge">2v2</span>
        <span class="badge">std</span>
        <span class="badge">double elimination</span>
      </div>
    </div>
    <h1>{tournament.name}</h1>
    <div class="header-bottom">
      <span>Hosted by <a class="hosted-by" href="/user/{tournament.admin.osu_id}">
        {tournament.admin.username}
      </a></span>
      <a href={frontUrl} class="button">
        <img class="icon" src="/icons/user-plus-solid.svg" alt="icon" />
        sign up
      </a>
    </div>
    <!-- <span>sample subtext with cool words and stuff</span> -->
  </div>
  <div class="tournament-body">
    <div class="tournament-left-body">
      <div class="card row-card">
        <CardTitle title="Details" />
        <div class="card-content">
          osu!
        </div>
      </div>
    </div>
    <div class="tournament-right-body">
      <div class="card">
        <CardNav links={cardNavLinks} highlight={cardNavHighlight} />
        <div class="card-content">

        </div>
      </div>
    </div>
  </div>
</div>


<br /><br />
<div class="tourney-container">
  <div class="left-column">
    <div class="card links-card">
      <CardTitle title={"Links"} />

      <!-- TODO: multiple links -->
      <p><a href={frontUrl}>Home</a></p>
    </div>
    <div class="card team-card">
      <!-- TODO: multiple hosts -->
      <div class="team-member">
        <img
          class="avatar"
          src="https://a.ppy.sh/{tournament.admin.osu_id}"
          alt=""
        />
        <a href={"/user/" + tournament.admin.osu_id} class="member-name"
          >{tournament.admin.username}</a
        >
        <p class="member-role">Role</p>
      </div>
    </div>
  </div>
  <div class="right-column">
    <div class="container card" id="description">
      <CardTitle title={"Description"} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      <p>yeah yeah ok 1v1 or some shit</p>
    </div>
    <div class="container card" id="description">
      <CardTitle title={"Another Custom Section"} />
      <p>hurr durr sex penis</p>
      <br />
      <p>xdxdxdxdxd</p>
    </div>
  </div>
</div>

<style>
  div.tournament-header {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
  }
  div.tournament-header > h1 {
    margin: 0;
  }
  div.tournament-header > div.banner {
    width: 100%;
    height: 10rem;
    background-image: var(--bg-img);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: unset;
  }
  div.tournament-header > div.banner > div.layer {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    gap: var(--dense-pad-size);

    height: 100%;
    padding: var(--pad-size);
    background-color: var(--bg-faded);
  }
  div.tournament-header > div.banner > div.layer > span.badge {
    background-color: var(--accent-color);
    color: var(--bg-color-1);
    padding: 0.1rem var(--dense-pad-size);
    border-radius: 3px;
  }
  div.tournament-header > div.header-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  div.tournament-header > div.header-bottom .hosted-by{
    font-size: larger;
    font-weight: bold;
  }

  div.tournament-body {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
  }
  div.tournament-left-body {
    flex-grow: 1;
  }
  div.tournament-right-body {
    flex-grow: 3;
  }

  div.tournament-container {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
  }

  div.left-column {
    margin-right: 1rem;
    height: max-content;
    flex-grow: inherit;
  }
  @media screen and (max-width: 600px) {
    div.left-column {
      flex-grow: 100;
      margin-right: 0;
    }
  }

  div.right-column {
    flex-direction: column;
    flex-grow: 100;
  }

  div.team-member {
    display: flex;
    align-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  div.team-member img.avatar {
    width: 2rem;
    height: 100%;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  a.member-name {
    flex-grow: 100;
    margin-right: 1rem;
    color: var(--main-font-color);
  }

  p.member-role {
    opacity: 0.5;
  }

  div.left-column div.team-card {
    padding-bottom: 0.3rem;
    height: 100%;
  }

  div.links-card {
    padding-bottom: 0.01rem;
  }
  div.links-card p {
    margin-bottom: 1rem;
  }
</style>
