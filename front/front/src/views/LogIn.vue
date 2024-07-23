<template>
    <Header ref="ref" style="position: fixed; top: 0; left: 0;" />
    <!-- 로그인 전에는 검색창, 장바구니 아이콘 없앨지..? -->

    <main style="border : 1px solid red;">
        <div id="kakao-login-btn" @click="loginToKakao()">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼" />
        </div>
        <div id="naverIdLogin"></div>
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

        this.loginToNaver();
    },
    methods : {
        // 카카오 연동 로그인
        loginToKakao() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname',
                success: this.getKakaoAccount,
                fail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        },
        getKakaoAccount(authObj) {
            console.log(authObj);
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    // console.log(res);
                    const kakaoAccount = res.kakao_account;
                    // console.log(kakaoAccount);

                    const nickname = kakaoAccount.profile.nickname;
                    console.log(nickname);
                }
            });
        },
        // 네이버 연동 로그인
        loginToNaver() {
            const naverLogin = new naver.LoginWithNaverId({
                clientId: 'rz0LdkK8u8l_mvNdJpvv',
                callbackUrl: 'http://localhost:5173/login',
                isPopup: true,
                loginButton: {color: "green", type: 3, height: 50,}
            });

            // 네이버 로그인 초기화
            naverLogin.init();
            // console.log(naverLogin);
            
            // 로그인 후 정보 가져오기
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    // setLoginStatus();
                    console.log(naverLogin);
                    //console.log(naverLogin.user);
                    console.log(naverLogin.user.getName());
                    console.log(naverLogin.user.getEmail());
                    // console.log(naverLogin.user.getMobile());
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