<script>
<<<<<<< HEAD
    const imageUrl = "https://assets.ppy.sh/beatmaps/1415122/covers/cover.jpg";
    
    let tournamentName = "Feiri's Test Tournament";
    let stage = "Semifinals"
    let pool = [{
        name: "NM",
        color: "#bbcff0",
        maps: [{
            beatmapset_id: 492407,
            beatmap_id: 1049018,
            name: "Meramipop - Sanae-san [Behind you!]"
        }, {
            beatmapset_id: 697895,
            beatmap_id: 1478218,
            name: "Meramipop - Secret Desire - Dyes Remix - [Irregular]"
        }]
    }, {
        name: "HD",
        color: "#f0e3a5",
        maps: [{
            beatmapset_id: 1415122,
            beatmap_id: 2916573,
            name: "BEMANI Sound Team \"Expander\" - STOIC HYPOTHESIS [Crack]"
        }, {
            beatmapset_id: 1235834,
            beatmap_id: 2569027,
            name: "Kakeru - Do you love me? feat. rintaru [kurukuru]"
        }, {
            beatmapset_id: 1260920,
            beatmap_id: 2621145,
            name: "aran - Xperanza [Another]"
        }]
    }, {
        name: "DN",
        color: "#cf8ae6",
        maps: [{
            beatmapset_id: 1344501,
            beatmap_id: 2985706,
            name: "Aitsuki Nakuru & Kabocha - Lilith [Lust]"
        }]
    }]
</script>

=======
  const imageUrl = "https://assets.ppy.sh/beatmaps/1415122/covers/cover.jpg";

  let tournamentName = "Feiri's Test Tournament";
  let stage = "Semifinals";
  let pool = [
    {
      name: "NM",
      color: "#bbcff0",
      maps: [
        {
          url: "https://osu.ppy.sh/beatmapsets/492407#osu/1049018",
          cover: "https://assets.ppy.sh/beatmaps/492407/covers/cover.jpg",
          name: "Meramipop - Sanae-san [Behind you!]",
        },
        {
          url: "https://osu.ppy.sh/beatmapsets/697895#osu/1478218",
          cover: "https://assets.ppy.sh/beatmaps/697895/covers/cover.jpg",
          name: "Meramipop - Secret Desire - Dyes Remix - [Irregular]",
        },
      ],
    },
    {
      name: "HD",
      color: "#f0e3a5",
      maps: [
        {
          url: "https://osu.ppy.sh/beatmapsets/1415122#osu/2916573",
          cover: "https://assets.ppy.sh/beatmaps/1415122/covers/cover.jpg",
          name: 'BEMANI Sound Team "Expander" - STOIC HYPOTHESIS [Crack]',
        },
      ],
    },
  ];
</script>

<br />
>>>>>>> master
<div class="main">
  <div class="banner" style="--image-url: url({imageUrl})">
    <div class="layer">
      <div class="banner-content">
        <h1>{tournamentName}</h1>
        <h2>{stage}</h2>
      </div>
    </div>
  </div>
</div>
<br />
<div class="main">
  <table>
    {#each pool as category}
<<<<<<< HEAD
        {#each category.maps as map, i}
            <tr>
                <td class="cover"><img src="https://assets.ppy.sh/beatmaps/{map.beatmapset_id}/covers/cover.jpg" alt="cover" class="cover"></td>
                <td class="colored-cell" style="--cell-color: {category.color}">{category.name}{i + 1}</td>
                <td><a href="https://osu.ppy.sh/b/{map.beatmap_id}">{map.name}</a></td>
                <td>more info</td>
                <td>in the future</td>
            </tr>
        {/each}
=======
      {#each category.maps as map, i}
        <tr>
          <td class="cover"><img src={map.cover} alt="cover" class="cover" /></td>
          <td class="colored-cell" style="--cell-color: {category.color}">{category.name}{i + 1}</td
          >
          <td><a href={map.cover}>{map.name}</a></td>
          <td>more info</td>
          <td>in the future</td>
        </tr>
      {/each}
>>>>>>> master
    {/each}
  </table>
</div>

<style>
<<<<<<< HEAD
    div.main {
        background-color: var(--lighter-bg-color);
        box-shadow: 0 1px 2px rgba(0,0,0,.24),0 1px 3px rgba(0,0,0,.12);
    }

    div.banner {
        background-size: cover;
        background-image: var(--image-url);
        height: 250px;
        width: 100%;
        background-repeat: no-repeat;

        margin: 0;
    }
    
    div.layer {
        background-color: #14141ec0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        position: relative;
    }

    div.banner-content {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.5rem 2rem;

        color: var(--alt-font-color);
        font-family: var(--secondary-font-families);
        font-weight: bold;
    }

    hr {
        margin: 0;
        border-top: 1px solid var(--even-lighter-bg-color);
        border-bottom: 0;
    }

    table {
        background-color: var(--lighter-bg-color);

        border-spacing: 0;
        border-collapse: collapse;

        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    img.cover {
        display: block;
        height: 2.5rem;
        padding: 0;
        margin: 0;
    }

    td {
        margin: 0;
        padding: 0rem 1rem;

        max-width: 30rem;
        overflow-x: scroll;
    }
    td.cover {
        margin: 0;
        padding: 0;
    }
    td.colored-cell {
        background-color: var(--cell-color);
    }
    td:not(.cover) {
        border-right: 1px dotted var(--main-font-color);
        border-left: 1px dotted var(--main-font-color);
    }

    td a {
        padding: 0rem 0.2rem;
        margin: 0;
    }

    p {
        margin: 0;
        padding: 0.5rem 2rem;
    }

</style>
=======
  div.main {
    background-color: var(--lighter-bg-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);
  }

  div.banner {
    background-size: cover;
    background-image: var(--image-url);
    height: 250px;
    width: 100%;
    background-repeat: no-repeat;

    margin: 0;
  }

  div.layer {
    background-color: #14141ec0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    position: relative;
  }

  div.banner-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.5rem 2rem;

    color: var(--alt-font-color);
    font-family: var(--secondary-font-families);
    font-weight: bold;
  }

  hr {
    margin: 0;
    border-top: 1px solid var(--even-lighter-bg-color);
    border-bottom: 0;
  }

  table {
    background-color: var(--lighter-bg-color);

    border-spacing: 0;
    border-collapse: collapse;

    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  img.cover {
    display: block;
    height: 2rem;
    padding: 0;
    margin: 0;
  }

  td {
    margin: 0;
    padding: 0rem 1rem;

    max-width: 30rem;
    overflow-x: scroll;
  }
  td.cover {
    margin: 0;
    padding: 0;
  }
  td.colored-cell {
    background-color: var(--cell-color);
  }
  td:not(.cover) {
    border-right: 1px dotted var(--main-font-color);
    border-left: 1px dotted var(--main-font-color);
  }

  td a {
    padding: 0rem 0.2rem;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0.5rem 2rem;
  }
</style>
>>>>>>> master
