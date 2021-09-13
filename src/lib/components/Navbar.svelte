<script>
    import logo from '$lib/components/logo.svg';
</script>

<div class="nav">
    <div class="container">
        <div class="row">
            <a href="/" class="logo">
                <h3>
                    <img class="logo" src={logo} alt="logo">
                    tourney hub
                </h3>
            </a>
            <ul>
                <li><a href="/tournaments">tournaments</a></li>
                <li><a href="/example-mappool">example mappool</a></li>
                <li><a href="/example-tourney">example tourney</a></li>
                <li><a href="/auth/login">login</a></li>
            </ul>
        </div>        
    </div>
</div>

<style>
    div.nav {
        background-color: var(--lighter-bg-color);
        border-bottom: 1px solid var(--even-lighter-bg-color);
        margin-bottom: 1rem;

        list-style: none;
    }

    div.row {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0;
        margin-right: 0;
        justify-content: space-between;
        align-items: center;
        align-content: center;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 100%;
    }

    li {
        padding: auto;
        display: inline;
        height: 100%;
    }

    a {
        padding: 1rem;
        text-transform: uppercase;
        color: var(--main-font-color);
    }
    a:hover {
        text-decoration: none;
        box-shadow: inset 0px -3px 0px 0px var(--accent-color);
    }

    h3 {
        display: flex;
        align-items: center;

        margin: 0;
    }

    a.logo {
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 400;
        margin-right: 20px;
        padding: 10px 0;
    }

    img.logo {
        width: 2rem;
        height: 2rem;

        box-sizing: border-box;
        display: block;
        margin-right: 0.5rem;
    }
</style>
