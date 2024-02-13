<script>
export default {
    name: "AppMain",
}

</script>

<template>
    <section>
        <div class="container cards">
            <div class="row"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cards {
    background-color: red;

    display: flex;
    justify-content: center;
    gap: 20px;
    width: calc(100% / 6 - 20px);
    flex-wrap: wrap;
    margin: 20px;
    height: 50vh;
    overflow: auto;
}


</style>

