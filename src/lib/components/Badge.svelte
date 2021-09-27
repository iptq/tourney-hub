<script>
  export let name;
  export let color;
  export let borderColor = "";
</script>

<div style="--color: {color}; --border-color: {borderColor}">
  {name}
</div>

<style>
  div {
    background-color: var(--color);
    padding: 0 var(--dense-pad-size);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    color: aliceblue;

    height: min-content;
  }
</style>