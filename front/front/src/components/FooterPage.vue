<template>
    <div class="wrap">
        <div class="btn_group">
            <a href="#">홈</a>
            <a href="#">카테고리</a>
            <a href="#">좋아요</a>
            <a href="#">마이페이지</a>
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
    border: 1px solid red;
}
.btn_group {
    display: flex;
    justify-content: space-around;
}
.btn_group > a {
    line-height: 50px;
    border: 1px solid orange;
}
</style>