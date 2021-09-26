<script context="module">
  import { page } from "$app/stores";
  import CardTitle from "$lib/components/CardTitle.svelte";
  import ProfileNav from "$lib/components/ProfileNav.svelte";

  // stolen from https://github.com/thekelvinliu/country-code-emoji/blob/main/src/index.js
  function flag(cc) {
    const CC_REGEX = /^[a-z]{2}$/i;
    const FLAG_LENGTH = 4;
    const OFFSET = 127397;

    if (!CC_REGEX.test(cc)) {
      const type = typeof cc;
      throw new TypeError(
        `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
          type === "string" ? cc : type
        }' instead.`
      );
    }

    const codePoints = [...cc.toUpperCase()].map(
      (c) => c.codePointAt() + OFFSET
    );
    return String.fromCodePoint(...codePoints);
  }

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
        src="https://a.ppy.sh/{$page.params.slug}"
        alt="pfp for user {$page.params.slug}"
      />
      <h2>{player.country}&nbsp;&nbsp;{player.name}</h2>
    </div>
    <div class="player-card-stat">
      <span>ELO</span>
      {player.elo}
    </div>
    <div class="player-card-stat">
      <span>Bancho Rank</span>
      {player.rank}
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
    <div class="card">
      <CardTitle title="about" />
      {player.about}
    </div>
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
