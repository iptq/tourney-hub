<script lang="ts">
    export let disabled: boolean;
</script>

<input type="submit" disabled={disabled} />

<style>
    input {
        background: var(--accent-color);
        padding: 0.5rem;
        width: 100%;
        border: none;
        border-radius: 10rem;
        color: var(--main-bg-color);
    }
    input:hover {
        cursor: pointer;
        background-color: var(--accent-color-darker);
    }
    input:active {
        background-color: var(--accent-color-even-darker);
    }
</style>