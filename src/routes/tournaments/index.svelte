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

<table>
  <thead>
    <tr>
      <th>Tournament Name</th>
    </tr>
  </thead>
  <tbody>
    {#each tournaments as tournament}
      <tr>
        <td><a href={"tournaments/" + tournament.id}>{tournament.name}</a></td>
      </tr>
    {/each}
  </tbody>
</table>
