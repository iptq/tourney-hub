<script lang="ts">
  export let maxWidthRem: number = 10000;
</script>

<div style="--max-width-rem: {maxWidthRem}">
  <slot />
</div>

<style>
  div {
    background-color: var(--even-lighter-bg-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);
    padding: 1rem;

    max-width: calc(var(--max-width-rem) * 1rem);
    border-radius: 4px;
    margin-top: 1rem;
  }
  @media screen and (max-width: 600px) {
    div {
      padding: 1rem;
    }
  }
</style>
