<template>
    <div class="main">
        <div class="headbar">
            กิจกรรม ๘๐ ปี โรงเรียนแม่สะเรียง "บริพัตรศึกษา"
        </div>
        <div class="content">
            <Result :student-id="studentId"/>
            <hr>
            <control-panel v-model="studentId" @onValueChanged="onValueChanged"/>
            <hr>
            <div class="footer">
                Developed by <a href="https://fb.com/madooding">@madooding</a>
            </div>
        </div>
    
    </div>
</template>

<script>
import Result from './Result'
import ControlPanel from './ControlPanel'

export default{
    data: () => ({
        studentId: 0
    }),
     components:{
        Result,
        ControlPanel
    },
    methods: {
        onValueChanged(){
            console.log("Value has changed " + this.studentId)
        }
    }
}
</script>