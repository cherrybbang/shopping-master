<template>
    <Header ref="ref" style="position: fixed; top: 0; left: 0;" />

    <main class="category">
        <nav>
            <ul class="parent_menu">
                <li>
                    <a href="#" v-for="(c, index) in category" :key="index" @click="showMenu(index)">{{ c }}</a>
                </li>
            </ul>
            <ul class="child_menu">
                <li>
                    <a href="#" v-for="(c, index) in ccategory" :key="index">{{ c }}</a>
                </li>
            </ul>
        </nav>
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
            category : [],
            ccategory : [],
            index : 0,
        }
    },
    mounted() {
        this.$refs.ref.logo = BackButton;
        this.$refs.ref.width = 'width : 25px; margin-top : 10px;';
        this.$refs.ref.title = '카테고리';

        this.categoryList();
    },
    methods : {
        categoryList() {
            const formData = new FormData();
            formData.append('type','parent_category');

            let a = '';

            fetch('http://182.213.2.211/api/category_api.php', {
            method : 'POST',
            body : formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // console.log(Object.values(data.msg)[0].category_name);

                for(let i=0; i<data.msg.length; i++) {
                    // console.log(data.msg[i].category_name);
                    this.category.push(data.msg[i].category_name);
                    console.log(this.category);
                }

                console.log(this.category);
            })
        },
        showMenu(index) {
            const list = document.querySelector('.child_menu');

            if(index == 0) {

                this.ccategory = [];

                const formData = new FormData();
                formData.append('type','child_category');
                formData.append('category_pno','1');

                let a = '';

                fetch('http://182.213.2.211/api/category_api.php', {
                method : 'POST',
                body : formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // console.log(Object.values(data.msg)[0].category_name);

                    for(let i=0; i<data.msg.length; i++) {
                        // console.log(data.msg[i].category_name);
                        this.ccategory.push(data.msg[i].category_name);
                        console.log(this.ccategory);
                    }
                })

                list.style.display = 'block';


            }
            if(index == 1) {

                this.ccategory = [];

                const formData = new FormData();
                formData.append('type','child_category');
                formData.append('category_pno','2');

                let a = '';

                fetch('http://182.213.2.211/api/category_api.php', {
                method : 'POST',
                body : formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // console.log(Object.values(data.msg)[0].category_name);

                    for(let i=0; i<data.msg.length; i++) {
                        // console.log(data.msg[i].category_name);
                        this.ccategory.push(data.msg[i].category_name);
                        console.log(this.ccategory);
                    }
                })

                list.style.display = 'block';

            }
            if(index == 2) {

                this.ccategory = [];

                const formData = new FormData();
                formData.append('type','child_category');
                formData.append('category_pno','3');

                let a = '';

                fetch('http://182.213.2.211/api/category_api.php', {
                method : 'POST',
                body : formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // console.log(Object.values(data.msg)[0].category_name);

                    for(let i=0; i<data.msg.length; i++) {
                        // console.log(data.msg[i].category_name);
                        this.ccategory.push(data.msg[i].category_name);
                        console.log(this.ccategory);
                    }
                })

                list.style.display = 'block';

            }
            

        }
    }
}

</script>

<style scoped>
.category {
    width: 100%; height: 700px;
    margin-top: 50px;
    /* border: 3px solid red; */
}
nav {
    display: flex;
    width: 100%; height: inherit;
    padding-top: 10px;
}
.parent_menu {
    width: 100%;
    /* border: 1px solid red; */
}
.parent_menu > li {
    /* display: flex; */
    /* flex-wrap: nowrap; */

    width: 100%; height: 70px;
    line-height: 70px;
    /* border: 1px solid red; */
}
a {
    display: block;
    width: 100%; height: 100%;
    margin-top: 10px;
    padding-left: 10px;
    border: 1px solid #ccc;
}
.child_menu {
    width: 100%;
    display: none;
    /* border: 1px solid red; */
}
.child_menu > li {
    width: 100%; height: 70px;
    line-height: 70px;
    list-style: none;
    /* border: 1px solid red; */
}
</style>