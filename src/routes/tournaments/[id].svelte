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

<script>
  import CardTitle from "$lib/components/CardTitle.svelte";
  import TourneyNav from "$lib/components/TourneyNav.svelte";
  import BannerCard from "$lib/components/BannerCard.svelte";

  export let tournament;

  let frontUrl = "/tournaments/" + tournament.id;
</script>

<h1>{tournament.name}</h1>

<details>
  <summary>Tournament JSON</summary>
  <pre>{JSON.stringify(tournament, null, 2)}</pre>
</details>

<TourneyNav
  {frontUrl}
  mappoolsUrl={frontUrl + "/mappools"}
  playersUrl={frontUrl + "/players"}
  highlight="Front"
/>

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
        <a
          href="https://osu.ppy.sh/users/{tournament.admin.osu_id}"
          class="member-name">{tournament.admin.username}</a
        >
        <p class="member-role">{tournament.admin.role}</p>
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
  div.tourney-container {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    div.tourney-container {
      flex-direction: column-reverse;
    }
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
