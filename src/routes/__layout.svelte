<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div>
    <Navbar/>
    <br>
    <div class="container stretch">
        <slot></slot>
    </div>
    <Footer>/</Footer>
</div>

<style>
    div.stretch {
        min-height: 52rem;
    }
</style>
