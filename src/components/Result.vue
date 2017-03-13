<template>
    <div class="container">
        <img :src=url alt="Example Cover" class="img-responsive img-thumbnail" id="cover">
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
            return "https://mbs.madooding.com/img.php?sid=" + this.studentId
        }
    }
}
</script>

<style scoped>
    div.container {
        width: 100%;
    }
</style>