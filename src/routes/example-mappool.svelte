<script>
  import CardTitle from "$lib/components/CardTitle.svelte";
  import TourneyNav from "$lib/components/TourneyNav.svelte";
  import BannerCard from "$lib/components/BannerCard.svelte";
  import MappoolRow from "$lib/components/mappool/MappoolRow.svelte";

  let banner = {
    imageUrl: "https://i.redd.it/y8deg1o011n71.jpg",
    title: "Feiri's Test Tournament",
    subtext: "osu!std | 1 - 1k | BWS",
    url: "/example-tournament",
  };

  let frontUrl = "/example-tourney";
  let mappoolsUrl = "/example-mappools";
  let playersUrl = "/example-players";

  let pool = [
    {
      name: "NM",
      color: "#4b5f80",
      maps: [
        {
          beatmapsetId: 492407,
          beatmapId: 1049018,
          name: "Meramipop - Sanae-san [Behind you!]",
        },
        {
          beatmapsetId: 697895,
          beatmapId: 1478218,
          name: "Meramipop - Secret Desire - Dyes Remix - [Irregular]",
        },
      ],
    },
    {
      name: "HD",
      color: "#807345",
      maps: [
        {
          beatmapsetId: 1415122,
          beatmapId: 2916573,
          name: 'BEMANI Sound Team "Expander" - STOIC HYPOTHESIS [Crack]',
        },
        {
          beatmapsetId: 1235834,
          beatmapId: 2569027,
          name: "Kakeru - Do you love me? feat. rintaru [kurukuru]",
        },
        {
          beatmapsetId: 1260920,
          beatmapId: 2621145,
          name: "aran - Xperanza [Another]",
        },
      ],
    },
    {
      name: "DN",
      color: "#6f2a86",
      maps: [
        {
          beatmapsetId: 1344501,
          beatmapId: 2985706,
          name: "Aitsuki Nakuru & Kabocha - Lilith [Lust]",
        },
      ],
    },
  ];
</script>

<BannerCard
  imageUrl={banner.imageUrl}
  title={banner.title}
  subtext={banner.subtext}
  url={banner.url}
/>
<TourneyNav {frontUrl} {mappoolsUrl} {playersUrl} highlight="None" />

<div class="card">
  <CardTitle title="Semifinals" line={false} />
  <table>
    <tr>
      <th class="cover">cover</th>
      <th>mod</th>
      <th style="width: 100%;">beatmap</th>
      <th>something</th>
      <th>idk</th>
    </tr>
    {#each pool as category}
      {#each category.maps as map, i}
        <MappoolRow
          beatmapsetId={map.beatmapsetId}
          beatmapId={map.beatmapId}
          categoryColor={category.color}
          categoryName={category.name}
          modNum={i + 1}
          mapName={map.name}
        />
      {/each}
    {/each}
  </table>
</div>

<style>
  table {
    background-color: var(--lighter-bg-color);

    border: 1px solid var(--even-lighter-bg-color);
    border-spacing: 0;
    border-collapse: collapse;

    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  tr:nth-child(odd) {
    background-color: var(--slightly-lighter-bg-color);
  }
  tr:nth-child(even) {
    background-color: var(--lighter-bg-color);
  }

  th {
    padding: 0.5rem 0;
    background-color: var(--slightly-lighter-bg-color);
    color: var(--main-font-color);

    border-bottom: 1px solid var(--even-lighter-bg-color);
  }
</style>
