<template>
    <div class="wrap">
        <div class="btn_group">
            <img src="@/assets/home.png">
            <router-link to="/category"><img src="@/assets/menu.png"></router-link>
            <img src="@/assets/like.png">
            <img src="@/assets/mypage.png">
        </div>
    </div>
</template>

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
    border-radius: 5px;
    border: 1px solid #ccc;
}
.btn_group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit; height: inherit;
}
.btn_group img {
    width: 25px; height: 25px;
    /* border: 1px solid orange; */
}
</style>