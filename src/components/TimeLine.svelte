<script>
    import Card from './Card.svelte';
    import Loading from './Loading.svelte';

    export let posts = [];
    export let loadingText = 'Cargando...';
</script>

<style>
    .TimeLine {
        padding: 4em 0 0 0;
    }
</style>

<div class="TimeLine">
    <div class="TimeLine-container">
        {#each posts as post}
        <Card {...post} />
        {:else}
        <Loading {loadingText} />
        {/each}
    </div>
</div>
