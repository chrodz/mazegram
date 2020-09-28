<script>
    import { onMount } from 'svelte';

    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import TimeLine from '../components/TimeLine.svelte';

    let data = {};
    let data2 = {};
    const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";
    const API2 = "http://nivelarroba.test/test";

    onMount( async () => {
        const response = await fetch(API);
        data = await response.json();

        const response2 = await fetch(API2);
        data2 = await response2.json();

        console.log(data2);
    })
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    :global(body){
        background-color: #fafafa;
        color: rgba(38,38,38,.7);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(hh1, h2, h3){
        margin: 0;
        padding: 0;
    }
</style>

<Header />
<Main>
    <TimeLine posts="{data.posts}" />
    <Sidebar {...data.user} {...data2} />
</Main>
