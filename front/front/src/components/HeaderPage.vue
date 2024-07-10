<template>
    <div class="wrap">
        <div class="header_group">
            <div class="logo">
                <a href="#">로고</a>
            </div>

            <div class="nav">
                <input type="text" placeholder="검색창">
                <a href="#">장바구니</a>
            </div>
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
.header_group {
    display: flex;
    justify-content: space-between;
    width: inherit; height: inherit;
    border: 1px solid blue;
}
.logo {
    width: 100px; height: 50px;
    border: 1px solid orange;
}
.nav {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid orange;
}
.nav > input {
    width: 70%; height: 30px;
}
</style>