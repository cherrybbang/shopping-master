<template>
    <div class="header_wrap">
        <div class="header_group">
            <div class="logo">
                <img :src="logo" :style="width">
            </div>

            <p class="title">{{ title }}</p>

            <div class="nav">
                <img src="@/assets/search.png" style="width: 25px;">
                <img src="@/assets/cart.png" style="width: 25px;">
            </div>
        </div>
    </div>
</template>

<script>
// import logoImg from '@/assets/logo.png'

export default {
    data() {
        return {
            logo : '',
            width : '',
            title : '',
        }
    },
    mounted() {

    },
    methods : {

    }

}

</script>

<style scoped>
/* * {
    margin: 0; padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    text-decoration: none;
    color: #000;
} */
.header_wrap {
    width: 100%; height: 50px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.header_group {
    display: flex;
    justify-content: space-between;
    width: 97%; height: inherit;
    margin: 0 auto;
    /* border: 1px solid blue; */
}
.logo {
    width: 100px; height: 50px;
    padding-top: 3px;
    padding-left: 5px;
    /* border: 1px solid orange; */
}
.nav {
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid orange; */
}
.title {
    width: 100px; height: 50px;
    text-align: center; line-height: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    /* border: 1px solid red; */
}
</style>