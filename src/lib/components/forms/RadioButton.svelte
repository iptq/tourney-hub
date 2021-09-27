<script lang="ts">
  export let text: String;
  export let check: Boolean = false;
</script>

<div class="custom-radio">
  {#if check}
    <label class="radio-container">
      <input type="radio" checked="checked" name="radio">
      <span class="checkmark"></span>
    </label>
  {:else}  
    <label class="radio-container">
      <input type="radio" name="radio">
      <span class="checkmark"></span>
    </label>
  {/if}
  {text}
</div>

<style>
  div.custom-radio {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--dense-pad-size);
  }

  label.radio-container {
    display: block;
    position: relative;
    user-select: none;
    cursor: pointer;
  }

  label.radio-container > input {
    position: absolute;
    height: 0;
    width: 0;
    margin: 0;
    opacity: 0;
  }

  label.radio-container > span.checkmark {
    position: relative;
    display: inline-block;
    background-color: var(--bg-color-1);
    border: 1px solid var(--bg-color-4);
    border-radius: 100%;
    height: 1rem;
    width: 1rem;
  }
  label.radio-container:hover input ~ span.checkmark {
    background-color: var(--bg-color-3);
  }
  label.radio-container input:checked ~ span.checkmark {
    background-color: var(--accent-color);
    border: 1px solid var(--accent-color);
  }

  span.checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label.radio-container input:checked ~ span.checkmark:after {
    display: block;
  }

  label.radio-container span.checkmark:after {
    top: 0.3rem;
    left: 0.3rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 100%;
    background: var(--bg-color-1);
  }
</style>