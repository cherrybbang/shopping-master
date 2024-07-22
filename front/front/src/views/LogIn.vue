<template>
    <Header ref="ref" style="position: fixed; top: 0; left: 0;" />
    <!-- 로그인 전에는 검색창, 장바구니 아이콘 없앨지..? -->

    <main style="border : 1px solid red;">
        <div id="naverIdLogin">
        </div>
    </main>
    
</template>

<script>
import Header from '@/components/HeaderPage.vue'
import BackButton from '@/assets/go_back_btn.png'

export default {
    components : {
        Header,
    },
    data() {
        return {

        }
    },
    mounted() {
        this.$refs.ref.logo = BackButton;
        this.$refs.ref.width = 'width : 25px; margin-top : 10px;';
        this.$refs.ref.title = '로그인';

        this.loginNaver();
    },
    methods : {
        loginNaver() {
            const naverLogin = new naver.LoginWithNaverId({
                clientId: 'rz0LdkK8u8l_mvNdJpvv',
                callbackUrl: 'http://localhost:5173/login',
                isPopup: false,
                loginButton: {color: "green", type: 3, height: 50,}
            });
            naverLogin.init();
            // console.log(naverLogin);
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    // setLoginStatus();
                    console.log(naverLogin);
                    //console.log(naverLogin.user);
                    console.log(naverLogin.user.getName());
                    console.log(naverLogin.user.getMobile());
                }
            });
        }
    }
}
</script>

<style scoped>
main {
    width: 100%;
    /* text-align: center; */
    margin-top: 50px;
}
</style>