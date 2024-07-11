<template>
    <div class="wrap">
        <div class="slide_wrap">
            <div class="slide_group">
                <div>슬라이드1</div>
            </div>
        </div>

        <p>오늘의 상품!</p>
        <div class="content_wrap">
            <div class="main_content">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.wrap {
    width: 100%; height: 100vh;
    border: 3px solid red;
    /* z-index: -10; */
}
.slide_wrap {
    height: 300px;
    padding: 10px;
    border: 1px solid blue;
}
.content_wrap {
    height: 500px;
    padding: 10px;
    border: 1px solid blue;
}
.main_content {
    display: flex;
    justify-content: space-between;
}
.main_content > div {
    width: 100px; height: 100px;
    border: 1px solid orange;
}
</style>