<template>
    <div id="poster">
      <div class="header"><span>大学生职业招聘</span></div>
      <div class="images">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" label-position="left" class="Login-container">
        <h3 class="register-title">
                系统登录
                <el-button @click="toLogin()">去登陆</el-button>
        </h3>
        <el-form-item label="" prop="username">
          <el-input v-model.number="ruleForm.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item label="" prop="age">
          <el-input v-model.number="ruleForm.age" placeholder="年龄"></el-input>
        </el-form-item>
        <el-form-item style="position: relative;left:27%">
          <el-button type="primary" style="border:none ;background-color: #505458;" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </div>
      
    </div>
  </template>
  <script>
  export default{
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          password: '',
          checkPass: '',
          age: ''
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
            message: '注册成功',
            type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toLogin(){
        this.$router.push('/');
      }
    }
  }
  
  </script>

<style>
#poster{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  margin: 0px;
  padding: 0px;
}
.register-container{
  border-radius: 15px;
  background-clip: border-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.register-title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.images{
  background-image: url(../assets/banner.png);
    height: 1000px;
    width: 1903px;
    background-repeat: no-repeat;
    background-size: 694px 438px;
    background-color: #00d7c6;
    margin: 0px auto 0px 0px;
}
.header{
  width: 1903px;
  height: 49px;
  background-color: black;
  color: #00d7c6;
  font-size: 20px;
  font-weight: bold;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0px auto 0px auto;
}


</style>