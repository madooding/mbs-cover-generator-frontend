<template>
    <div class="main">
        <div class="headbar">
            กิจกรรม ๘๐ ปี โรงเรียนแม่สะเรียง "บริพัตรศึกษา"
        </div>
        <div class="content">
            <Result :student-id="studentId"/>
            <hr>
            <div class="footer">
                Developed by <a href="https://fb.com/madooding">@madooding</a>
            </div>
        </div>
    
    </div>
</template>

<script>
import Result from './Result'
export default{
    data: () => ({
        studentId: 12345
    }),
     components:{
        Result
    }
}
</script>