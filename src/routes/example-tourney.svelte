<script>
    import CardTitle from "$lib/components/CardTitle.svelte";
    import MappoolBanner from "$lib/components/mappool/MappoolBanner.svelte";
    import TourneyNav from "$lib/components/TourneyNav.svelte";
    import BannerCard from "$lib/components/BannerCard.svelte";
    
    let banner = {
        imageUrl: "https://i.redd.it/n7fud5vc85n71.jpg",
        title: "Feiri's Test Tournament",
        subtext: "osu!std | 1 - 1k | BWS",
        url: "#"
    }

    let frontUrl = "/example-tourney";
    let mappoolsUrl = "/example-mappools";
    let playersUrl = "/example-players";
</script>

<BannerCard imageUrl={banner.imageUrl} title={banner.title} subtext={banner.subtext} url={banner.url}/>
<TourneyNav frontUrl={frontUrl} mappoolsUrl={mappoolsUrl} playersUrl={playersUrl} highlight="Front"/>
<div class="container card" id="links">
    <CardTitle title={"Links"}/>
    <p>Discord: insert url</p>
    <p>Tourney Hub: haha recursion</p>
</div>
<div class="container card" id="description">
    <CardTitle title={"Description"}/>
    <p>generic big name tournament</p>
    <br>
    <p>yeah yeah ok 1v1 or some shit</p>
</div>
<div class="container card" id="description">
    <CardTitle title={"Another Custom Section"}/>
    <p>hurr durr sex penis</p>
    <br>
    <p>xdxdxdxdxd</p>
</div>
