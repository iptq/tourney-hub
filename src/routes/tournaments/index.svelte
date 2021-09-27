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

<a href="/tournaments/create">Create New Tournament</a>

<div />

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
