<script>
  import { onMount } from "svelte";

  onMount(async () => {
    let res = await fetch("/api/tournaments");
    console.log("TOURNAMENTS LIST", res);
  });
</script>

<a href="/tournaments/create">Create New Tournament</a>

<p>tournaments go here</p>
