<template>
    <div class="wrap">
        <div class="slide_wrap">
            <div class="slide_group">
                <img :src="currentBanner">
            </div>
        </div>

        <p>오늘의 상품!</p>
        <div class="content_wrap">
            <div class="main_content">
                <img src="@/assets/banner2.jpg">
                <img src="@/assets/banner2.jpg">
                <img src="@/assets/banner2.jpg">
                <img src="@/assets/banner2.jpg">
                <img src="@/assets/banner2.jpg">
                <img src="@/assets/banner2.jpg">
            </div>
        </div>
    </div>
</template>

<script>
import bannerOne from '@/assets/banner.jpg'
import bannerTwo from '@/assets/banner1.jpg'
import bannerThree from '@/assets/banner2.jpg'

export default {
    data() {
        return {
            bannerImg : [
                bannerOne,
                bannerTwo,
                bannerThree
            ],
            currentIndex : 0,
            time: null
        }
    },
    mounted() {
        this.Sliding();
    },
    methods: {
        Sliding() {
            this.time = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.bannerImg.length;
            },3000);
        },
    },
    computed : {
        currentBanner() {
            return this.bannerImg[this.currentIndex];
        }
    }
}
</script>

<style scoped>
.wrap {
    width: 100%; height: 100vh;
    /* overflow: scroll; */
    border: 3px solid red;
}
.slide_wrap {
    height: 400px;
    padding: 10px;
    /* border: 2px solid blue; */
}
.slide_group {
    display: flex;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    width: 400px; height: inherit;
    overflow: hidden;
    /* border: 1px solid aqua; */
}
.slide_group > img {
    width: 400px; height: 400px;
    /* border: 1px solid orange; */
}
.wrap > p {
    padding-left: 10px;
    font-weight: bold;
    /* border: 1px solid #000; */
}
.content_wrap {
    height: 500px;
    padding: 10px;
    /* border: 1px solid blue; */
}
.main_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.main_content > img {
    width: 190px; height: 200px;
    margin-top: 10px;
    /* border: 1px solid orange; */
}
</style>