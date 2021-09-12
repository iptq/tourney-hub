<script>
    const links = [
        {url: "https://kit.svelte.dev", name: "svelte"},
        {url: "https://osu.technology", name: "ਤਕਨਾਲੋਜੀ"}
    ]
</script>

<ul>
    <div class="container">
        {#each links as link}
        <li><a href={link.url}>{link.name}</a></li>
        {/each}
    </div>
</ul>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 1rem 0rem;
        text-align: center;
        overflow: hidden;

        background-color: var(--lighter-bg-color);
        border-top: 1px solid var(--even-lighter-bg-color);
    }

    li {
        display: inline-block;
        padding: 0rem 1rem;
    }

    li a {
        margin: 0 auto;
        color: var(--main-font-color);
    } li a:hover {
        text-decoration: none;
    }
</style>
