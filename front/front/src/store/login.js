import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
    state : () => ({
        data : [],
    }),
    actions : {
        setLoginData(loginData) {
            this.data = loginData;
        }
    }
})