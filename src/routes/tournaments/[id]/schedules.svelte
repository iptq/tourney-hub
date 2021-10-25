<script>
  let matches = [{
    id: 1,
    round: "semifinals",
    time: "in 7 hours",
    format: "Best of 11 | 2 bans",
    teamRed: {
      name: "coders"
    },
    teamBlue: {
      name: "inters"
    }
  }, {
    id: 2,
    round: "semifinals",
    time: "in 12 hours",
    format: "Best of 11 | 2 bans",
    teamRed: {
      name: "not the tribe"
    },
    teamBlue: {
      name: "some top tier team idk"
    }
  }, ]
</script>

{#each matches as match}
<div class="card-content schedule-card">
  <div class="schedule-header">
    <div class="schedule-header-left">
      <span class="capitalize">{match.round}</span>
    </div>
    <div class="schedule-header-right">
      <span>{match.time}</span>
    </div>
  </div>
  <div class="schedule-body">
    <div class="team team1">
      <h2>{match.teamRed.name}</h2>
    </div>
    <div class="versus faded">
      <span>vs</span>
    </div>
    <div class="team team2">
      <h2>{match.teamBlue.name}</h2>
    </div>
  </div>
  <div class="schedule-footer faded ">
    <span>{match.format}</span>
  </div>
</div>
{/each}

<style>
  div.schedule-card {
    display: flex;
    flex-direction: column;
    gap: var(--dense-pad-size);
  }

  div.schedule-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--pad-size);
  }

  div.schedule-header-left {
    display: flex;
    gap: var(--pad-size);
  }
  div.schedule-header-right {
    gap: var(--pad-size);
  }

  div.schedule-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--pad-size);
  }
  div.schedule-body > div.team {
    display: flex;
    flex: 1 0 100px;
  }
  div.team.team1 {
    flex-direction: row-reverse;
    color: var(--red);
  }
  div.team.team2 {
    flex-direction: row;
    color: var(--blue);
  }
  div.versus {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .capitalize {
    text-transform: capitalize;
  }

  h2 {
    margin: 0;
  }
</style>