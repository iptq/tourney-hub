<script context="module">
  export async function load({ page, fetch }) {
    let id = page.params.id;
    let params = new URLSearchParams({ id });
    let result = await fetch("/api/user/info?" + params);
    let user = await result.json();
    if (user === null) return { status: 404 };

    return {
      props: { user },
    };
  }
</script>

<script>
  import CardTitle from "$lib/components/CardTitle.svelte";
  import ProfileNav from "$lib/components/ProfileNav.svelte";
  import { flag } from "$lib/utils/flag";

  export let user;

  let player = {
    name: "Feiri",
    elo: 2345,
    rank: 4710,
    flag: flag("CA"),
    country: "Canada",
    tourneyWins: 0,
    tourneyCount: 7,
    picksPlayed: 59,
    picksWon: 27,
    about: "I play the tech maps and that's about it."
  };
</script>

<div class="card">
  <div class="card-content profile-head">
    <div>
      <img
        src="https://a.ppy.sh/{user.osu_id}"
        alt="pfp for user {user.osu_id}"
      />
    </div>
    <div class="player-name">
      <div>
        <h1>{player.name}</h1>
        <div>
          {player.flag} {player.country}
        </div>
      </div>
    </div>
    <div>
      {player.about}
    </div>
  </div>
</div>
<br>




<div class="columns">
  <div class="card row-card">
    <div class="player-card-avatar row-card-top card-content">
      <img
        src="https://a.ppy.sh/{user.osu_id}"
        alt="pfp for user {user.osu_id}"
      />
      <h2>{flag(user.country_code)}&nbsp;&nbsp;{user.username}</h2>
    </div>
    <div class="player-card-stat card-content">
      <span>ELO</span>
      {player.elo}
    </div>
    <div class="player-card-stat card-content">
      <span>Bancho Rank</span>
      {user.rank}
    </div>
    <div class="player-card-stat card-content">
      <span>Tournament Wins</span>
      {player.tourneyWins}
    </div>
    <div class="player-card-stat card-content">
      <span>Tournaments Played</span>
      {player.tourneyCount}
    </div>
    <div class="player-card-stat card-content">
      <span>Picks Won</span>
      {player.picksWon}
    </div>
    <div class="player-card-stat card-content">
      <span>Picks Played</span>
      {player.picksPlayed}
    </div>
  </div>
  <div class="profile-info">
    <div class="card">
      <CardTitle title="about" />
      <div class="card-content">
        {player.about}
      </div>
    </div>

    {#if user.about}
      <div class="card">
        <CardTitle title="about" />
        {user.about}
      </div>
    {/if}
    <div>
      <ProfileNav playerUrl="#" staffUrl="#" highlight="" />
    </div>
    <div class="card">
      <div class="card-content">
        oiawhge iughewgh ewighei auieagie gieagielgerilgbuerbgaer igealg beag
      </div>
    </div>
  </div>
</div>

<style>
  img {
    width: 8rem;
    height: auto;
    border-radius: var(--border-radius);
  }

  div.columns {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
  }
  @media screen and (max-width: 600px) {
    div.columns {
      flex-direction: column;
    }
  }

  

  div.player-card-stat {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
  div.player-card-stat span {
    opacity: 0.5;
  }

  div.profile-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
  }

  div.card {
    margin: 0;
  }

  h1, h2 {
    margin: 0;
  }

  div.profile-head {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
  }

  div.player-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
