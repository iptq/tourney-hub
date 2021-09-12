<ul>
  <div class="container">
    <li class="left"><a href="/" class="logo">tourney hub</a></li>
    <li class="left"><a href="/tournaments">tournaments</a></li>
    <li class="left"><a href="/example-mappool">example mappool</a></li>

    <li class="right"><a href="/auth/login">login</a></li>
  </div>
</ul>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--lighter-bg-color);

    border-bottom: 1px solid var(--even-lighter-bg-color);
  }

  li.left {
    float: left;
    margin-right: 2rem;
  }

  li.right {
    float: right;
    margin-left: 2rem;
  }

  li a {
    display: block;
    padding: 1rem 0rem;
    font-size: 1rem;
    /* font-weight: bold; */
    color: var(--main-font-color);
    text-transform: uppercase;
    text-align: center;
  }
  li a:hover {
    text-decoration: none;
    box-shadow: inset 0px -3px 0px 0px var(--accent-color);
  }

  li a.logo {
    font-size: 1.5rem;
    font-weight: bold;

    line-height: 1.1rem;
  }
</style>
