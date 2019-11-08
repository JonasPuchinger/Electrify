<script>

</script>

<style type="text/scss">
    #search {
        grid-column: search;
        padding-left: 1em;
    }

    #search input {
        width: 50%;
        border: none;
        border-radius: 1em;
        padding: 0.5em 1em;
        margin-left: 1em;

        &:focus {
            outline: none;
        }
    }
</style>

<div id="search">
    <input type="search" q="musicsearch" placeholder="Search...">
</div>