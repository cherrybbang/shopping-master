<template>
    <Header ref="ref" style="position: fixed; top: 0; left: 0;" />
    <div class="wrap">
        <div class="slide_wrap">
            <div class="slide_group">
                <img :src="currentBanner">
            </div>
        </div>

        <p>오늘의 상품!</p>
        <div class="content_wrap">
            <div class="main_content">
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                    <del>25,500원</del> <span>15%</span>
                </div>
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                </div>
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                </div>
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                </div>
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                </div>
                <div>
                    <img src="@/assets/banner2.jpg">
                    <p>패딩</p>
                    <p>30,000원</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/HeaderPage.vue'
import logoImg from '@/assets/logo.png'

import bannerOne from '@/assets/banner.jpg'
import bannerTwo from '@/assets/banner1.jpg'
import bannerThree from '@/assets/banner2.jpg'

export default {
    components : {
        Header
    },
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
        this.$refs.ref.logo = logoImg;
        this.$refs.ref.width = 'width : 42px;';
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
    padding: 0 5px;
    margin-top: 55px;
    /* border: 3px solid red; */
}
.slide_wrap {
    width: 98%;
    height: 400px;
    margin: 0 auto 10px;
    /* padding: 0 5px; */
    border: 1px solid #ccc;
}
.slide_group {
    display: flex;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    width: 100%; height: inherit;
    overflow: hidden;
    z-index: -10;
    /* border: 1px solid aqua; */
}
.slide_group > img {
    width: 100%; height: 400px;
    /* border: 1px solid orange; */
}
.wrap > p {
    width: 100%;
    font-size: 1.1rem;
    /* padding-left: 10px; */
    font-weight: bold;
    /* border: 1px solid #000; */
}
.content_wrap {
    width: 100%;
    height: 1150px;
    /* border: 1px solid blue; */
}
.main_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.main_content > div {
    width: 49%; height: 350px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.main_content img {
    width: 100%; height: 200px;
    /* border: 1px solid orange; */
}
</style>