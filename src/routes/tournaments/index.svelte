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

<a href="/tournaments/create">Create New Tournament</a>

<p>tournaments go here</p>
