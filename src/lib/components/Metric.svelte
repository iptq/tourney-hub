<script lang="ts">
  export let name: String;
  export let value: any;
</script>

<div>
  <span class="value">{value}</span>
  <span class="name">{name}</span>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;

    padding: var(--dense-pad-size) var(--pad-size);
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
