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

<script>
  export let tournament;
</script>

<h1>{tournament.name}</h1>

<details>
  <summary>Tournament JSON</summary>
  <pre>{JSON.stringify(tournament, null, 2)}</pre>
</details>

Run by<a href="/user/{tournament.admin_id}">{tournament.admin.username}</a>
