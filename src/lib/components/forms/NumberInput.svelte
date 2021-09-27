<script lang="ts">
  export let min: number;
  export let max: number;
  export let name: string;
  export let text: string;
  export let widthRem: number = 3;
</script>

<div>
  <input type="number" name={name} style="--width: {widthRem}">
  {text}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--dense-pad-size);
  }

  input {
    background-color: unset;
    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
    color: unset;
    width: calc(var(--width) * 1rem);
  }

  input:focus {
    outline: 2px solid var(--bg-color-4);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
