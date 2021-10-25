<script lang="ts">
  export let name: string;
  export let value: any;
  export let useBorder: boolean = true;
</script>

{#if useBorder}
<div class="use-border">
  <span class="value">{value}</span>
  <span class="name">{name}</span>
</div>
{:else}
<div>
  <span class="value">{value}</span>
  <span class="name">{name}</span>
</div>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;

    padding: var(--dense-pad-size) var(--pad-size);
  }

  div.use-border {
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-color-4);
  }

  span.value {
    font-size: 2rem;
    font-weight: bold;
  }

  span.name {
    opacity: var(--faded-opacity);
  }
</style>
