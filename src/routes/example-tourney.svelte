<script>
  import CardTitle from "$lib/components/CardTitle.svelte";
  // import MappoolBanner from "$lib/components/mappool/MappoolBanner.svelte";
  import TourneyNav from "$lib/components/TourneyNav.svelte";
  import BannerCard from "$lib/components/BannerCard.svelte";

  let banner = {
    imageUrl: "https://i.redd.it/n7fud5vc85n71.jpg",
    title: "Feiri's Test Tournament",
    subtext: "osu!std | 1 - 1k | BWS",
    url: "#",
  };

  let frontUrl = "/example-tourney";
  let mappoolsUrl = "/example-mappools";
  let playersUrl = "/example-players";

  let team = [
    {
      name: "Feiri",
      userId: 3214844,
      role: "host",
    },
    {
      name: "ThunderBird2678",
      userId: 3388082,
      role: "pooler",
    },
    {
      name: "IOException",
      userId: 2688103,
      role: "tester",
    },
  ];

  let links = [
    {
      name: "Discord",
      url: "https://discord.gg/ApyUTMzV",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/feiri_",
    },
  ];
</script>

<BannerCard
  imageUrl={banner.imageUrl}
  title={banner.title}
  subtext={banner.subtext}
  url={banner.url}
/>
<TourneyNav {frontUrl} {mappoolsUrl} {playersUrl} highlight="Front" />

<div class="tourney-container">
  <div class="left-column">
    <div class="card links-card">
      <CardTitle title={"Links"} />
      <div>
        {#each links as link}
          <p><a href={link.url}>{link.name}</a></p>
        {/each}
      </div>
    </div>
    <div class="card row-card">
      {#each team as member}
        <div class="team-member">
          <div class="team-member-avatar">
            <img class="avatar" src="https://a.ppy.sh/{member.userId}" alt="" />
            <a
              href="https://osu.ppy.sh/users/{member.userId}"
              class="member-name">{member.name}</a
            >
          </div>
          <div class="team-member-role">
            {member.role}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="right-column">
    <div class="container card" id="description">
      <CardTitle title={"Description"} />
      <div class="card-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p>yeah yeah ok 1v1 or some shit</p>
      </div>
    </div>
    <div class="container card" id="description">
      <CardTitle title={"Another Custom Section"} />
      <div class="card-content">
        <p>hurr durr sex penis</p>
        <br />
        <p>xdxdxdxdxd</p>
      </div>
    </div>
  </div>
</div>

<style>
  div.tourney-container {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    div.tourney-container {
      flex-direction: column-reverse;
    }
  }

  div.left-column {
    margin-right: 1rem;
    height: max-content;
    flex-grow: inherit;
  }
  @media screen and (max-width: 600px) {
    div.left-column {
      flex-grow: 100;
      margin-right: 0;
    }
  }

  div.right-column {
    flex-direction: column;
    flex-grow: 100;
  }

  div.team-member {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--pad-size);
    padding: calc(0.6 * var(--pad-size)) var(--pad-size);
  }
  div.team-member img.avatar {
    width: 2rem;
    height: 100%;
    border-radius: 1rem;
  }

  div.team-member > div.team-member-avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: var(--pad-size);
  }
  div.team-member > div.team-member-role {
    display: flex;
    flex-direction: row-reverse;
    opacity: var(--faded-opacity);
  }

  a.member-name {
    flex-grow: 100;
    margin-right: 1rem;
    color: var(--main-font-color);
  }

  div.links-card {
    padding-bottom: 0.01rem;
  }
  div.links-card p {
    margin-bottom: 1rem;
  }
</style>
