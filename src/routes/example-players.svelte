<script>
    import CardTitle from "$lib/components/CardTitle.svelte";
    import MappoolBanner from "$lib/components/mappool/MappoolBanner.svelte";
    import TourneyNav from "$lib/components/TourneyNav.svelte";
    import BannerCard from "$lib/components/BannerCard.svelte";

    let banner = {
        imageUrl: "https://i.redd.it/n7fud5vc85n71.jpg",
        title: "Feiri's Test Tournament",
        subtext: "osu!std | 1 - 1k | BWS",
        url: "/example-tournament"
    }

    let mappools = [{
        imageUrl: "https://i.redd.it/y8deg1o011n71.jpg",
        stageName: "Semifinals",
        mappoolUrl: "/example-mappool"
    }]

    let frontUrl = "/example-tourney";
    let mappoolsUrl = "/example-mappools";
    let playersUrl = "/example-players";
</script>

<BannerCard imageUrl={banner.imageUrl} title={banner.title} subtext={banner.subtext} url={banner.url}/>
<TourneyNav frontUrl={frontUrl} mappoolsUrl={mappoolsUrl} playersUrl={playersUrl} highlight="Players"/>
<div class="container card" id="players">
    <CardTitle title="Players"/>
    <p>
        insert list of players here
    </p>
</div>
