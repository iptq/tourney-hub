<script>
  let staffTeam = [{
    id: 3214844,
    name: "Feiri",
    role: "Host"
  }, {
    id: 2,
    name: "peppy",
    role: "pooler"
  }, {
    id: 873961,
    name: "Skystar",
    role: "pooler, testplayer"
  }, {
    id: 3044645,
    name: "No Dap",
    role: "streamer"
  }, {
    id: 3388082,
    name: "ThunderBird2678",
    role: "commentator"
  }];
</script>

<div class="card-content">
  {#each staffTeam as staff}
  <a href="/user/{staff.id}">
    <div class="staff">
      <div class="left">
        <img src="https://a.ppy.sh/{staff.id}" alt="{staff.id} pfp">
        {staff.name}
      </div>
      <div class="right">
        <span class="faded">{staff.role}</span>
      </div>
    </div>
  </a>
  {/each}
</div>

<style>
  img {
    width: 3rem;
    height: 3rem;
    border-radius: var(--border-radius);
  }

  div.card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: var(--dense-pad-size);
    padding: var(--pad-size);
    /* background-color: ; */
  }
  a {
    padding: var(--dense-pad-size);
    background-color: var(--bg-color-2);
    border: 1px solid var(--bg-color-4);
    border-radius: var(--border-radius);
  }
  a:hover {
    transition: 200ms;
    text-decoration: none;
    background-color: var(--bg-color-3);
  }

  div.staff {
    display: flex;
    flex-direction: row;
    gap: var(--pad-size);
    justify-content: space-between;
  }

  div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--pad-size);
    flex: 1 0 auto;
  }
  div.right {
    display: flex;
    flex-direction: row-reverse;
    align-self: center;
    justify-content: space-between;
  }
</style>
