<script>
  let players = [{
    id: 3214844,
    name: "Feiri",
    rank: 1,
    elo: 9987
  }, {
    id: 2,
    name: "peppy",
    rank: 2,
    elo: 9124
  }, {
    id: 873961,
    name: "Skystar",
    rank: 69,
    elo: 7215
  }, {
    id: 3044645,
    name: "No Dap",
    rank: 125,
    elo: 1551
  }, {
    id: 3388082,
    name: "ThunderBird2678",
    rank: 727,
    elo: 67
  }];
</script>

<div class="card-content">
  {#each {length: 10} as i}
  {#each players as player}
  <a href="/user/{player.id}">
    <div class="player">
      <div class="left">
        <img src="https://a.ppy.sh/{player.id}" alt="{player.id} pfp">
        {player.name}
      </div>
      <div class="right">
        <span class="faded">{player.elo} ELO (#{player.rank})</span>
      </div>
    </div>
  </a>
  {/each}
  {/each}
</div>

<style>
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
  }

  div.card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: var(--dense-pad-size);
    padding: var(--pad-size);
    /* background-color: ; */
  }
  a {
    padding: var(--dense-pad-size);
    background-color: var(--bg-color-2);
    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
  }
  a:hover {
    transition: 200ms;
    text-decoration: none;
    background-color: var(--bg-color-3);
  }

  div.player {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
    justify-content: space-between;
  }

  div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--dense-pad-size);
    flex: 1 0 auto;
  }
  div.right {
    display: flex;
    flex-direction: row-reverse;
    align-self: center;
    justify-content: space-between;
  }
</style>
