<script>
    export let title;
    export let line = true;
</script>

{#if line}
<div class="line">
    <p class="accent-color">&#9724;</p>
    <p>{title}</p>
</div>
<hr>
{:else}
<div>
    <p class="accent-color">&#9724;</p>
    <p>{title}</p>
</div>
{/if}

<style>
    div {
        display: inline-flex;
        padding-bottom: 0.75rem;
    }
    div.line {
        padding-bottom: 0;
    }

    p {
        font-family: var(--secondary-font-families);
        font-weight: bold;
    }
    p.accent-color {
        color: var(--accent-color);
        margin-right: 1rem;
    }

    hr {
        margin: 0.5rem 0 1rem 0;
        border-top: 1px solid var(--even-lighter-bg-color);
        border-bottom: 0;
    }
</style>