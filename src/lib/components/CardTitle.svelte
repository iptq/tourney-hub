<script>
  export let title;
</script>

<div class="card-content">
  <h3>{title}</h3>
</div>

<style>
  div.card-content {
    padding: var(--dense-pad-size) var(--pad-size);
    background-color: var(--bg-color-3);
    border: 1px solid var(--bg-color-4);
  }

  h3 {
    margin: 0;
    text-transform: capitalize;
  }
</style>
