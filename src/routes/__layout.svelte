<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div id="app">
  <div class="content-wrap">
    <Navbar />
    <div class="container">
      <slot />
    </div>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</div>

<style lang="scss" scoped>
  $footer-height: 62px;
  #app {
    position: relative;
    min-height: 100vh;

    .content-wrap {
      padding-bottom: $footer-height;

      > .container {
        padding-bottom: 36px;
      }
    }
  }

  footer.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footer-height;
  }
</style>
