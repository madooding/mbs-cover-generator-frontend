<template>
    <div class="container">
        <img :src=url alt="Example Cover" class="img-responsive img-thumbnail" id="cover" v-lazy="url">
        <div v-lazy:background-image="url"></div>
    </div>
</template>

<script>
export default {
    props: {
        studentId: {
            type: Number,
            default: 15551
        }
    },
    computed: {
        url() { 
            let studentId = this.studentId
            if (this.studentId <= 0 ){
                studentId = 15551
            }
            return "https://mbs.madooding.com/img.php?sid=" + studentId
        }
    }
}
</script>

<style scoped>
    div.container {
        width: 100%;
    }

    img#cover {
        width: 100%;
    }

    img[lazy=loading]{
        width: 851px;
        height: 315px;
    }
</style>