<script>
    import Profile from './Profile.svelte';
    import Stories from './Stories.svelte';
    import Footer from './Footer.svelte';

    export let nickname;
    export let name;
    export let name_last;
</script>

<style>
    .Sidebar {
        position: relative;
        padding: 4.5em 0 0 0;
    }
    .Sidebar-container {
        position: fixed;
    }
</style>

<div class="Sidebar">
    <div class="Sidebar-container">
        <Profile {nickname} {name} {name_last} />
        <Stories />
        <Footer />
    </div>
</div>
