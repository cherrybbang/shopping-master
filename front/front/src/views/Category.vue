<template>
    <Header ref="ref" style="position: fixed; top: 0; left: 0;" />

    <main class="category">
        <nav>
            <ul>
                <li>상의</li>
                <li>하의</li>
                <li>치마</li>
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

            let categoryData;

            const formData = new FormData();
            formData.append('type','parent_category');

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
                    categoryData = data.msg[i].category_name;
                    console.log(categoryData);
                }
            })
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
ul {
    /* border: 1px solid red; */
}
ul > li {
    height: 100px;
    margin-top: 5px;
    border: 1px solid #ccc;
}
</style>