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
  console.log("USER", user);

  let player = {
    name: "Feiri",
    elo: 2345,
    rank: 4710,
    country: flag("CA"),
    tourneyWins: 0,
    tourneyCount: 7,
    picksPlayed: 59,
    picksWon: 27,
    about: "I play the tech maps and that's about it.",
  };
</script>

<div class="columns">
  <div class="player-card">
    <div class="player-card-avatar">
      <img
        src="https://a.ppy.sh/{user.osu_id}"
        alt="pfp for user {user.osu_id}"
      />
      <h2>{flag(user.country_code)}&nbsp;&nbsp;{user.username}</h2>
    </div>
    <div class="player-card-stat">
      <span>ELO</span>
      {player.elo}
    </div>
    <div class="player-card-stat">
      <span>Bancho Rank</span>
      {user.rank}
    </div>
    <div class="player-card-stat">
      <span>Tournament Wins</span>
      {player.tourneyWins}
    </div>
    <div class="player-card-stat">
      <span>Tournaments Played</span>
      {player.tourneyCount}
    </div>
    <div class="player-card-stat">
      <span>Picks Won</span>
      {player.picksWon}
    </div>
    <div class="player-card-stat">
      <span>Picks Played</span>
      {player.picksPlayed}
    </div>
  </div>
  <div class="profile-info">
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
      oiawhge iughewgh ewighei auieagie gieagielgerilgbuerbgaer igealg beag
    </div>
  </div>
</div>

<style>
  img {
    width: 8rem;
    height: auto;
    border-radius: 4px;
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

  div.player-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: var(--border-radius);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);
    min-width: 16rem;
  }
  @media screen and (max-width: 600px) {
    div.player-card {
      border-radius: 0;
      min-width: 100%;
    }
  }
  div.player-card div {
    padding: 0.5rem 1rem;
  }
  div.player-card div:nth-child(2n + 1) {
    background-color: var(--lighter-bg-color);
  }
  div.player-card div:nth-child(2n) {
    background-color: var(--slightly-lighter-bg-color);
  }

  div.player-card div.player-card-avatar {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  div.player-card div.player-card-avatar h2 {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  div.player-card div.player-card-stat {
    display: flex;
    justify-content: space-between;
  }

  div.player-card div.player-card-stat span {
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
</style>
