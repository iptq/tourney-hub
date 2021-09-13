<script>
    export let title;
</script>

<div>
    <p class="accent-color">&#9724;</p>
    <p>{title}</p>
</div>
<hr>

<style>
    div {
        display: inline-flex;
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
        margin: 0.5rem 0;
        border-top: 1px solid var(--even-lighter-bg-color);
        border-bottom: 0;
    }
</style>