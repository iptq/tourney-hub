<script>
    export let imageUrl;
    export let title;
    export let subtext;
    export let url;
</script>


<div class="card">
    <div class="banner" style="--image-url: url({imageUrl})">
        <div class="layer">
        <div class="banner-content">
            <a href={url}><h1>{title}</h1></a>
            <h2>{subtext}</h2>
        </div>
        </div>
    </div>
</div>

<style>
    div.banner {
        background-size: cover;
        background-image: var(--image-url);
        height: 250px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;

        margin: 0;
    }
    
    div.layer {
        background-color: rgba(41, 41, 41, 0.753);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        position: relative;
    }

    div.banner-content {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.5rem 2rem;

        color: var(--alt-font-color);
        font-family: var(--secondary-font-families);
        font-weight: bold;

        text-shadow: 2px 2px 2px rgba(0,0,0,0.85);
    }
    div.banner-content a {
        color: var(--alt-font-color);
        text-decoration: none;
    }
</style>
