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
  import TourneyNav from "$lib/components/TourneyNav.svelte";
  import BannerCard from "$lib/components/BannerCard.svelte";
  import MappoolBanner from "$lib/components/mappool/MappoolBanner.svelte";
  import type { Tournament } from "$lib/models/Tournament";

  export let tournament: Tournament;

  let frontUrl = "/tournaments/" + tournament.id;
</script>

<details>
  <summary>Tournament JSON</summary>
  <pre>{JSON.stringify(tournament, null, 2)}</pre>
</details>

<BannerCard
  imageUrl={tournament.banner_image}
  title={tournament.name}
  subtext="Sample Subtext"
  url={frontUrl}
/>

<TourneyNav
  {frontUrl}
  mappoolsUrl={frontUrl + "/mappools"}
  playersUrl={frontUrl + "/players"}
  highlight="Mappools"
/>

<div class="tourney-container">
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
</div>
