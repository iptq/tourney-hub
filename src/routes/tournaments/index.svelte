<script context="module">
  export async function load({ fetch }) {
    let result = await fetch("/api/tournaments");
    let tournaments = await result.json();
    if (tournaments === null) return { status: 404 };

    return {
      props: { tournaments },
    };
  }
</script>

<script>
  export let tournaments;
</script>

<div class="t-listing">
  <div class="content-header">
    <div class="search-bar">
      <img class="icon search-icon" src="/icons/search-solid.svg" alt="icon" />
      <input type="text" placeholder="search" />
    </div>
    <a class="button" href="/tournaments/create">
      <img class="icon" src="/icons/plus-square-regular.svg" alt="icon" />
      Create New
    </a>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>Tournament Name</th>
      <th>Host</th>
    </tr>
  </thead>
  <tbody>
    {#each tournaments as tournament}
      <tr>
        <td><a href={"/tournaments/" + tournament.id}>{tournament.name}</a></td>
        <td
          ><a href={"/user/" + tournament.admin.osu_id}
            >{tournament.admin.username}</a
          ></td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  div.t-listing {
    display: flex;
    flex-direction: column;
  }
  div.t-listing > div.content-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--pad-size);
  }

  div.search-bar {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    gap: var(--pad-size);
    padding: var(--dense-pad-size) var(--pad-size);

    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
  }
  div.search-bar:focus-within {
    outline: 2px solid var(--bg-color-4);
  }
  div.search-bar > input {
    width: 100%;
    color: var(--main-font-color);
    background-color: unset;
    border: unset;
  }
  div.search-bar > input:focus {
    outline: none;
  }

  .search-icon {
    filter: invert(96%) sepia(1%) saturate(4258%) hue-rotate(193deg)
      brightness(96%) contrast(91%);
  }
</style>
