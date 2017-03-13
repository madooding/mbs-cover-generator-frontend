<template>
    <div class="container">
        <img :src=url alt="Example Cover" class="img-responsive img-thumbnail" id="cover" v-lazy="url">
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    data: () => ({
        finalStudentId: 0
    }),
    props: {
        studentId: {
            type: Number,
            default: 15551
        }
    },
    watch: {
        studentId (){
            let cover = $('#cover')
            cover.attr('lazy', 'loading')
            cover.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
            this.updateFinalStudentId()
        }
    },
    computed: {
        url() { 
            let studentId = this.finalStudentId
            if (this.finalStudentId <= 0 ){
                studentId = 15551
            }
            return "https://mbs.madooding.com/img.php?sid=" + studentId
        }
    },
    methods: {
        updateFinalStudentId:
            _.debounce(function(){
                this.finalStudentId = this.studentId
            }, 500)
    }
}
</script>

<style scoped>
    div.container {
        width: 100%;
        height: 315px;
    }

    img#cover {
        width: 100%;
        max-height: 315px;
    }

    img[lazy=loading]{
        width: 100%;
        max-height: 293px;
        height: 100%;
        background: url('../assets/img/default.svg') no-repeat center center;
        background-size: 80px 80px;
    }
</style>