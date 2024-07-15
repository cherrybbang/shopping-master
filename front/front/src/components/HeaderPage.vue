<template>
    <div class="wrap">
        <div class="header_group">
            <div class="logo">
                <img src="@/assets/logo.png" style="width: 50px;">
            </div>

            <div class="nav">
                <img src="@/assets/search.png" style="width: 30px;">
                <img src="@/assets/cart.png" style="width: 30px;">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods : {

    }

}

</script>

<style scoped>
* {
    margin: 0; padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    text-decoration: none;
    color: #000;
}
.wrap {
    width: 100%; height: 50px;
    background-color: #fff;
    border: 1px solid #ccc;
}
.header_group {
    display: flex;
    justify-content: space-between;
    width: inherit; height: inherit;
    /* border: 1px solid blue; */
}
.logo {
    width: 100px; height: 50px;
    /* border: 1px solid orange; */
    padding-left: 10px;
}
.nav {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid orange; */
    padding-right: 10px;
}
</style>