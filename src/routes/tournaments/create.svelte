<script context="module">
  // Check if the user is logged in correctly.
  import { checkLogin } from "$lib/middleware/loginRequired";
  export async function load({ page, session }) {
    if (!checkLogin(session)) {
      return { redirect: "/", status: 302 };
    }
    return { props: {} };
  }
</script>

<script lang="ts">
  let spinning: boolean = false;
  let name: string;

  let submit = async () => {
    spinning = true;

    await fetch("/api/tournaments", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  };
</script>

<h1>Create Tournament</h1>

<form on:submit|preventDefault|stopPropagation={submit}>
  <input
    type="text"
    bind:value={name}
    required
    disabled={spinning}
    placeholder="Tournament Name"
  />

  <input type="submit" disabled={spinning} />
</form>
