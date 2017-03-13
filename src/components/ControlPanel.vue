<template>
    <div class="control-panel">
        <div class="row">
            <form role="form" class="form-horizontal" @submit.prevent="noSubmit">
                <div class="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2 col-xs-6">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" class="form-control input-lg" id="student_id" placeholder="รหัสประจำตัวนักเรียน" maxlength="5" style="font-size:24px;" value="" v-model="formValue">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-6"><button class="btn btn-primary btn-lg col-md-12 col-sm-12 col-col-xs-12" id="download-btn" @click="download">ดาวน์โหลด</button></div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data () {
            return {
                studentId: 0,
                formValue: ''
            }
        },
        created() {
            this.studentId = this.value
        },
        watch: {
            formValue () {
                this.studentId = this.formValue;
                this.$emit('input', Number(this.formValue));
            }
        },
        methods: {
            download(){
                location.href = 'downloads/' + Math.floor(this.studentId);
            }
        }
    }
</script>

<style scoped>
    #download-btn {
        font-size: 24px;
        line-height: 24px;
    }
</style>