<script context="module">
  // Check if the user is logged in correctly.
  import { checkLogin } from "$lib/middleware/loginRequired";
  export async function load({ session }) {
    if (!(await checkLogin(session))) {
      return { redirect: "/", status: 302 };
    }
    return { props: {} };
  }
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import CardTitle from "$lib/components/CardTitle.svelte";

  let spinning: boolean = false;
  let name: string;

  let submit = async () => {
    spinning = true;
    let result = await fetch("/api/tournaments", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    let body = await result.json();
    if (result.status == 200) {
      goto(`/tournaments/${body.id}`);
    }
  };
</script>

<svelte:head>
  <title>Create new tournament</title>
</svelte:head>

<div class="container card">
  <CardTitle title="Create New Tournament" />
  <div class="card-content">
    <form on:submit|preventDefault|stopPropagation={submit}>
      <div class="centered">
        <input
          type="text"
          bind:value={name}
          required={true}
          disabled={spinning}
          placeholder={""}
        />
        <input type="submit" disabled={spinning} class="button" />
      </div>
    </form>
  </div>
</div>

<style>
  div.centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--pad-size);
    padding: var(--pad-size);
    margin: auto;
    max-width: 25rem;
    width: 100%;
    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
  }

  input[type="text"] {
    color: unset;
    background: var(--bg-color-1);
    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
    padding: var(--dense-pad-size) var(--pad-size);
    width: calc(100% - 2 * var(--pad-size));
  }
  input[type="text"]:focus {
    outline: 2px solid var(--bg-color-4);
  }
</style>
