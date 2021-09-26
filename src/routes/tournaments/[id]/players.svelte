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
  import TourneyNav from "$lib/components/TourneyNav.svelte";
  import BannerCard from "$lib/components/BannerCard.svelte";
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
  highlight="Players"
/>

<div class="tourney-container" />
