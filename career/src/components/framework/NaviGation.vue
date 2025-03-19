<template>
    <div class="Navigation">
    <el-row class="tac">
    <el-col :span="12">
      
      <el-menu
        active-text-color="#ffd04b"
        background-color="#414a60"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>学生招聘</span>
            </template>
            <el-menu-item-group title="简历投递">
                <el-sub-menu index="1-1">
                  <template #title>招聘信息</template>
                  <el-menu-item index="1-1-1" @click="onCompany">企业情况</el-menu-item>
                  <el-menu-item index="1-1-2" @click="onEmployeer">招聘情况</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="1-2">投递结果</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        
        <el-sub-menu index="2">
            <template #title>
                <el-icon><location /></el-icon>
                <span>企业板块</span>
            </template>
            <el-menu-item-group title="招聘发布">
                <el-menu-item index="2-1" @click="onDeclare">招聘信息发布</el-menu-item>
                <el-menu-item index="2-2">应聘人员简历</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="3" @click="onAdmin" :disabled="true">
          <el-icon><setting /></el-icon>
          <span>管理员板块</span>
        </el-menu-item>

      </el-menu>
    </el-col>
</el-row>
    </div>
</template>
<script>
export default{
    data(){
        return 
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      onCompany(){
        this.$emit('STU-Company',{message:'STU-Company'})
      },
      onDeclare(){
        this.$emit('STU-Company',{message:'Company-Declare'})
      },
      onEmployeer(){
        this.$emit('STU-Company',{message:'STU-Employeer'})
      },
      onAdmin(){
        this.$emit('STU-Company',{message:'STU-Admin'})
      }
    }
}
</script>
<style>
.Navigation{
    margin: 0px;
}
.el-menu-vertical-demo{
    width: 200px;
    height: 840px;
}

</style>