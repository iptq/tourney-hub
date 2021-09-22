<script>
  export let imageUrl;
  export let stageName;
  export let mappoolUrl;
</script>

<a class="banner" href={mappoolUrl} style="--image-url: url({imageUrl})">
  <div class="layer">
    <div class="banner-content">
      <h1>{stageName}</h1>
    </div>
  </div>
</a>

<style>
  a.banner {
    display: block;
    background-size: cover;
    background-image: var(--image-url);
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    text-decoration: none;
  }

  div.layer {
    background-color: rgba(41, 41, 41, 0.753);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  div.banner-content {
    padding: 0.25rem 2rem;
    justify-content: center;
    display: flex;

    color: var(--alt-font-color);
    font-family: var(--secondary-font-families);
    font-weight: bold;

    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.85);
  }
</style>
