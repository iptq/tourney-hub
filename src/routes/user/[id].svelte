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
  import CardNav from "$lib/components/CardNav.svelte";
  import { flag } from "$lib/utils/flag";
  import Badge from "$lib/components/Badge.svelte";
  import Metric from "$lib/components/Metric.svelte";

  export let user;

  let player = {
    name: "Feiri",
    elo: 2345,
    rank: 4710,
    flag: flag("CA"),
    country: "Canada",
    tourneyWins: 0,
    tourneyCount: 7,
    matchesWon: 1,
    matchesPlayed: 2,
    picksPlayed: 59,
    picksWon: 27,
    about:
      "Strengths: tech, alt, gimmick, anything weird that isn't too fast ..... Weaknesses: (death)streams",
  };

  let cardNavLinks = [
    {
      name: "match history",
      url: "#",
    },
    {
      name: "staffing history",
      url: "#",
    },
  ];
  let cardNavHighlight = "match history";

  let matches = [
    {
      tourneyId: 2,
      tourneyName: "Feiri's Test Tournament",
      matchId: 69,
      roundName: "Semifinals",
      date: "Sep 20 2021  10:27 PM",
      timeAgo: "3 days ago",
      duration: "34 mins",
      win: false,
      teamRed: {
        players: [
          {
            id: 3214844,
            name: "Feiri",
            cost: 0.69,
          },
          {
            id: 2688103,
            name: "IOException",
            cost: 1.42,
          },
        ],
        mapsWon: 4,
      },
      teamBlue: {
        players: [
          {
            id: 3388082,
            name: "ThunderBird2678",
            cost: 1.1,
          },
          {
            id: 124493,
            name: "chocomint",
            cost: 3.14,
          },
        ],
        mapsWon: 5,
      },
    },
    {
      tourneyId: 2,
      tourneyName: "Feiri's Test Tournament",
      matchId: 69,
      roundName: "Quarterfinals",
      date: "Sep 20 2021  10:27 PM",
      timeAgo: "3 days ago",
      duration: "34 mins",
      win: true,
      teamRed: {
        players: [
          {
            id: 3214844,
            name: "Feiri",
            cost: 7.27,
          },
          {
            id: 2688103,
            name: "IOException",
            cost: 1.42,
          },
        ],
        mapsWon: 5,
      },
      teamBlue: {
        players: [
          {
            id: 226597,
            name: "WWWWWWWWWWWWWWWWWWWW",
            cost: 1.11,
          },
          {
            id: 895581,
            name: "-GN",
            cost: 1.01,
          },
        ],
        mapsWon: 1,
      },
    },
  ];
</script>

<div class="profile">
  <!-- Profile head (for main info and stuff) -->
  <div class="profile-banner">
    <div class="card-content profile-head">
      <div class="profile-head-info">
        <img
          class="pfp"
          src="https://a.ppy.sh/{user.osu_id}"
          alt="pfp for user {user.osu_id}"
        />
        <div class="player-name">
          <div>
            <h1>{user.username}</h1>
            <div>
              {flag(user.country_code)}
              {user.country_code}
            </div>
          </div>
        </div>
      </div>
      <div class="profile-right">
        <div class="main-stats">
          <Metric name="ELO" value={player.elo} />
          <Metric name="Rank" value={1} />
        </div>
        <div class="osu-link">
          <a class="button" href="https://osu.ppy.sh/users/{user.osu_id}">
            <img
              class="icon"
              src="/icons/external-link-alt-solid.svg"
              alt="icon"
            />
            osu! profile
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Everything below the head -->
  <div class="columns">
    <!-- small column of stats -->
    <div class="card row-card player-stats">
      <div class="player-card-stat card-content">
        <span>Bancho Rank</span>
        {user.rank}
      </div>
      <div class="player-card-stat card-content">
        <span>PP</span>
        {user.pp}
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
        <span>Matches Won</span>
        {player.matchesWon}
      </div>
      <div class="player-card-stat card-content">
        <span>Matches Played</span>
        {player.matchesPlayed}
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

    <!-- match history/staff history -->
    <div class="profile-info">
      {#if user.about}
        <div class="card">
          <CardTitle title="about" />
          {user.about}
        </div>
      {/if}
      <div class="card">
        <div class="card-content">
          {player.about}
        </div>
      </div>
      <div class="card">
        <CardNav links={cardNavLinks} highlight={cardNavHighlight} />
        {#each matches as match}
          <hr />
          <div class="card-content match-card {match.win}">
            <div class="match-header">
              <div>
                <span class="weight-bold">{match.tourneyName}</span> | {match.roundName}
                | {match.timeAgo}
              </div>
              {#if match.win}
                <Badge name="win" color="var(--win-color)" />
              {:else}
                <Badge name="loss" color="var(--loss-color)" />
              {/if}
            </div>
            <div class="match-body">
              <div class="match-result">
                <div class="match-team team-red">
                  <table>
                    {#each match.teamRed.players as player}
                      <tr>
                        <td>
                          <img
                            class="pfp"
                            src="https://a.ppy.sh/{player.id}"
                            alt="{player.id}'s pfp"
                          />
                        </td>
                        <td>
                          <span
                            ><a href="/user/{player.id}">{player.name}</a></span
                          >
                        </td>
                        <td>
                          <span class="faded">{player.cost.toFixed(2)}</span>
                        </td>
                      </tr>
                    {/each}
                  </table>
                </div>
                <div class="match-score">
                  <span class="red-score">{match.teamRed.mapsWon}</span>
                  <span>:</span>
                  <span class="blue-score">{match.teamBlue.mapsWon}</span>
                </div>
                <div class="match-team team-blue">
                  <table>
                    {#each match.teamBlue.players as player}
                      <tr>
                        <td>
                          <span class="faded">{player.cost.toFixed(2)}</span>
                        </td>
                        <td>
                          <span
                            ><a href="/user/{player.id}">{player.name}</a></span
                          >
                        </td>
                        <td>
                          <img
                            class="pfp"
                            src="https://a.ppy.sh/{player.id}"
                            alt="{player.id}'s pfp"
                          />
                        </td>
                      </tr>
                    {/each}
                  </table>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  img.pfp {
    width: 10rem;
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

  div.profile {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
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
    gap: var(--pad-size);
    flex-grow: 1;
  }

  div.card {
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  div.profile-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--pad-size);
  }
  @media screen and (max-width: 600px) {
    div.profile-head {
      padding: 0 var(--pad-size);
      flex-direction: column;
    }
  }

  div.profile-head > div.profile-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--pad-size);
  }
  @media screen and (max-width: 600px) {
    div.profile-head > div.profile-right {
      align-items: flex-start;
    }
  }
  div.profile-head div.main-stats {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
  }

  div.profile-head-info {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
  }

  div.player-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.player-stats {
    min-width: 15rem;
  }
  @media screen and (max-width: 600px) {
    div.player-stats {
      width: 100%;
    }
  }

  div.match-card {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
  }
  div.match-card.true {
    border-left: 4px solid var(--win-color);
  }
  div.match-card.false {
    border-left: 4px solid var(--loss-color);
  }

  div.match-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  div.match-body {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
  }

  div.match-result {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  @media screen and (max-width: 600px) {
    div.match-result {
      flex-direction: column;
      align-items: center;
    }
  }

  div.match-team {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    flex-grow: 4;
    width: 100%;
  }
  div.match-team.team-blue {
    align-items: flex-end;
  }

  div.match-player {
    display: flex;
    column-gap: var(--dense-pad-size);
    align-items: center;
  }
  div.match-team img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 1rem;
  }
  div.match-team td {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9rem;
  }

  div.match-score {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--dense-pad-size);
    font-weight: bold;
    font-size: 2rem;
  }
  div.match-score > span.red-score {
    color: var(--red);
  }
  div.match-score > span.blue-score {
    color: var(--blue);
  }

  table {
    width: min-content;
  }
  @media screen and (max-width: 600px) {
    table {
      width: 100%;
    }
  }
  div.team-red > table {
    text-align: start;
  }
  div.team-blue > table {
    text-align: end;
  }
  @media screen and (max-width: 600px) {
    div.team-blue > table {
      direction: rtl;
    }
  }
  td {
    padding: calc(0.1 * var(--dense-pad-size)) calc(0.2 * var(--pad-size));
  }
</style>
