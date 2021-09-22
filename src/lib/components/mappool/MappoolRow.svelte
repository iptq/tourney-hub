<script>
    export let categoryColor;
    export let categoryName;
    export let beatmapsetId;
    export let beatmapId;
    export let mapName;
    export let modNum;
</script>

<tr>
    <td class="cover"><img src="https://assets.ppy.sh/beatmaps/{beatmapsetId}/covers/cover.jpg" alt="cover" class="cover"></td>
    <td class="colored-cell" style="--cell-color: {categoryColor}">{categoryName}{modNum}</td>
    <td><a href="https://osu.ppy.sh/b/{beatmapId}">{mapName}</a></td>
    <td>more info</td>
    <td>in the future</td>
</tr>

<style>
    img.cover {
        display: block;
        height: 2.5rem;
        padding: 0;
        margin: 0;
    }

    td {
        margin: 0;
        padding: 0rem 1rem;

        max-width: 30rem;
        /* overflow-x: scroll; */
    }
    td.cover {
        margin: 0;
        padding: 0;
    }
    td.colored-cell {
        background-color: var(--cell-color);
    }
    td:not(.cover) {
        border-left: 1px solid var(--even-lighter-bg-color);
    }

    td a {
        padding: 0rem 0.2rem;
        margin: 0;
    }
</style>
