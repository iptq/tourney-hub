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

<svelte:head>
  <title>Create new tournament</title>
</svelte:head>

<script lang="ts">
  import { goto } from "$app/navigation";
    import Card from "$lib/components/Card.svelte";
    import CardTitle from "$lib/components/CardTitle.svelte";
    import ShortTextInput from "$lib/components/forms/ShortTextInput.svelte"
    import SubmitButton from "$lib/components/forms/SubmitButton.svelte"

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

<div class="container card">
    <CardTitle title="Create Tournament"/>
    
    <div class="form-div">
        <Card maxWidthRem={25}>
            <form on:submit|preventDefault|stopPropagation={submit}>
                <ShortTextInput 
                    fieldName   = "Tournament Name"
                    bind:value  = {name}
                    required    = {true}
                    disabled    = {spinning}
                    placeholder = ""
                />
                <br>
                <SubmitButton disabled={spinning}/>
            </form>
        </Card>
    </div>
</div>

<style>
    div.form-div {
        max-width: 30rem;
        margin: auto;
    }
</style>
