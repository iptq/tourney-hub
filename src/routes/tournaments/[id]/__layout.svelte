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
  export let tourneyPageName: String;
  let tournamentId = tournament.id;
  let frontUrl = "/tournaments/" + tournamentId;
  let tourneyLogo = "https://raw.githubusercontent.com/jasmineke/jasmineke.github.io/main/images/jas.png";

  let cardNavLinks = [{
    name: "front",
    url: frontUrl
  }, {
    name: "mappools",
    url: frontUrl + "/mappools"
  }, {
    name: "schedules",
    url: frontUrl + "/schedules"
  }, {
    name: "standings",
    url: frontUrl + "/standings"
  }, {
    name: "players",
    url: frontUrl + "/players"
  }, {
    name: "staff",
    url: frontUrl + "/staff"
  }]
</script>

<!-- <details>
  <summary>Tournament JSON</summary>
  <pre>{JSON.stringify(tournament, null, 2)}</pre>
</details> -->

<div class="tournament-container">
  <div class="tournament-header">
    <div class="card banner" style="--bg-img: url({tournament.banner_image});">
      <div class="layer">
        <div class="tourney-logo" style="--logo: url({tourneyLogo})">

        </div>
        <div class="badges">
          <span class="badge">2v2</span>
          <span class="badge">std</span>
          <span class="badge">double elimination</span>
        </div>
      </div>
    </div>
    <h1>{tournament.name}</h1>
    <div class="header-bottom">
      <span><i>Hosted by</i>&nbsp; <a class="hosted-by" href="/user/{tournament.admin.osu_id}">
        {tournament.admin.username}
      </a></span>
      <div class="top-buttons">
        <a href={frontUrl} class="button">
          <img class="icon" src="/icons/cog-solid.svg" alt="icon" />
          configure
        </a>
        <a href={frontUrl} class="button">
          <img class="icon" src="/icons/user-plus-solid.svg" alt="icon" />
          sign up
        </a>
      </div>
    </div>
    <!-- <span>sample subtext with cool words and stuff</span> -->
  </div>
  <div class="tournament-body">
    <div class="tournament-left-body">
      <div class="card">
        <div class="card-content">
          put some iInteresting tournament subtext here or something (it'll show up on the tourney listing!!!)
        </div>
      </div>
      <div class="row-card">
        <CardTitle title="Details" />
        <div class="card-content tourney-detail">
          <span>ELO range</span>
          4000 to 5000
        </div>
        <div class="card-content tourney-detail">
          <span>Start Date</span>
          Oct 4, 2021
        </div>
        <div class="card-content tourney-detail">
          <span>End Date</span>
          Jan 4, 2022
        </div>
        <div class="card-content tourney-detail">
          <span>Max Team Size</span>
          3
        </div>
        <div class="card-content tourney-detail">
          <span>Format</span>
          2v2
        </div>
        <div class="card-content tourney-detail">
          <span>Double Elimination</span>
          Yes
        </div>
      </div>
    </div>
    <div class="tournament-right-body">
      <div class="card">
        <CardNav links={cardNavLinks} highlight={"hi"} />
        <slot tournament={tournament} frontUrl={frontUrl} cardNavLinks={cardNavLinks}></slot>
      </div>
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
    flex-direction: row;
    justify-content: space-between;
    gap: var(--dense-pad-size);

    height: 100%;
    padding: var(--pad-size);
    background-color: var(--bg-faded);
  }
  div.tournament-header > div.banner > div.layer > div.badges {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--dense-pad-size);
  }
  div.tournament-header > div.banner > div.layer > div.badges > span.badge {
    background-color: var(--accent-color);
    color: var(--bg-color-1);
    padding: 0.1rem var(--dense-pad-size);
    border-radius: 3px;
    align-self: flex-end;
  }

  div.tourney-logo {
    background-image: var(--logo);
    background-size: contain;
    background-repeat: no-repeat;
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius);
  }

  div.top-buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--pad-size);
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
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
    width: 15rem;
  }
  div.tournament-right-body {
    flex: 1 0 0;
  }

  div.tourney-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--pad-size);
  }
  div.tourney-detail > span {
    opacity: var(--faded-opacity);
  }

  div.tournament-container {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
  }
</style>
