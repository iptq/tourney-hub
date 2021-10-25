<script lang="ts">
  import Metric from "$lib/components/Metric.svelte";

  // export let tournament: Tournament;
  export let frontUrl: string;
  let tournament = {
    stages: [{
      id: 4,
      name: "Grand Finals",
      format: "Best of 13 | 2 bans",
      contents: "6 NM / 3 HD / 3 HR / 4 DT / 3 FM / 1 TB",
      avgSR: 7.27
    }, {
      id: 3,
      name: "Finals",
      format: "Best of 13 | 2 bans",
      contents: "6 NM / 3 HD / 3 HR / 4 DT / 3 FM / 1 TB",
      avgSR: 7.04
    }, {
      id: 2,
      name: "Semifinals",
      format: "Best of 11 | 2 bans",
      contents: "6 NM / 3 HD / 3 HR / 4 DT / 3 FM / 1 TB",
      avgSR: 6.89
    }, {
      id: 1,
      name: "Quarterfinals",
      format: "Best of 11 | 2 bans",
      contents: "6 NM / 3 HD / 3 HR / 3 DT / 3 FM / 1 TB",
      avgSR: 6.71
    }, {
      id: 1,
      name: "Round of 16",
      format: "Best of 9 | 1 ban",
      contents: "5 NM / 3 HD / 3 HR / 3 DT / 3 FM / 1 TB",
      avgSR: 6.55
    }, {
      id: 1,
      name: "Round of 32",
      format: "Best of 9 | 1 ban",
      contents: "5 NM / 2 HD / 2 HR / 3 DT / 3 FM / 1 TB",
      avgSR: 6.32
    }, {
      id: 1,
      name: "Qualifiers",
      format: "Full playthrough",
      contents: "4 NM / 2 HD / 2 HR / 2 DT",
      avgSR: 6.66
    }]
  }
</script>

<div class="card-content mappools-container">
  {#each tournament.stages as stage}
  <a href={frontUrl + "/mappools/" + stage.id} class="mappool-row">
    <div class="mappool-row-left">
      <h2>{stage.name}</h2>
      <span class="faded">{stage.format}</span>
      <span class="faded">{stage.contents}</span>
    </div>
    <div class="mappool-row-right">
      <Metric name="AVG SR" value="{stage.avgSR.toFixed(2)}&#9733;" useBorder={false}/>
    </div>
  </a>
  {/each}
</div>

<!-- <div class="tourney-container">
  <div class="container card" id="mappools">
    <CardTitle title="Mappools" />
    {#each tournament.stages as stage}
      <MappoolBanner
        imageUrl={stage.mappool.image_url}
        stageName={stage.name}
        mappoolUrl={frontUrl + "/mappools/" + stage.id}
      />
    {/each}
  </div>
</div> -->

<style>
  div.mappools-container {
    display: flex;
    flex-direction: column;
    gap: var(--pad-size);
  }

  a.mappool-row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: var(--pad-size);
    flex: 1 0 auto;
    height: 100%;
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-color-4);
    border-left: 4px solid var(--accent-color);
    padding: var(--dense-pad-size);
  }
  a.mappool-row:hover {
    transition: 100ms;
    background-color: var(--bg-color-3);
    text-decoration: none;
  }

  a.mappool-row .mappool-row-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 auto;
  }
  a.mappool-row .mappool-row-right {
    display: flex;
    flex-direction: row-reverse;
    flex: 0 0 auto;
  }

  h2 {
    margin: 0;
  }
</style>
