<template>
          <div class="header">
            <span>大学生职业招聘</span>
            <el-button type="primary" style="width:5%; border:none ;background-color: #505458;position: relative;left: 94%; top:7px " @click="onLoginOut">注销</el-button>

          </div>
</template>
<script>
export default{
    data(){
        return 
    },
    methods:{
        onLoginOut(){
            this.$router.push('/')
        }
    },
}
</script>
<style>
.header{
  width: 1903px;
  height: 49px;
  background-color: black;
  color: #00d7c6;
  font-size: 20px;
  font-weight: bold;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0px;
}
.header>span{
  position: absolute;
  left: 20px;
  top: 10px;
}
</style>