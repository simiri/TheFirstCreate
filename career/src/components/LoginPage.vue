<template>
    <body id="poster">
      <div class="header"><span>大学生职业招聘</span></div>
      <div class="image">
        <el-form class="Login-container" label-position="left" label-width="0px">
            <h3 class="login-title">
                系统登录
                <el-button @click="toRegister">注册</el-button>
            </h3>
            <el-form-item label="">
                <el-input type="text" v-model="LoginForm.name" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="password" v-model="LoginForm.password" placeholder="密码"></el-input>
            </el-form-item>
  
            <el-form-item class="container-center">
                <el-button type="primary" style="width:25%; border:none ;background-color: #505458;position: relative;left: 37.5%; " @click="onSubmit">立即创建</el-button>
                <!-- <button @click="onHome">主页</button> -->
            </el-form-item>
        </el-form>
      </div>
        
    </body>
</template>
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        LoginForm: {
          name: '',
          password: ''
        },
      }
    },
    methods: {
      onSubmit() {
        let formData = new FormData()
        formData.append('name',this.LoginForm.name)
        formData.append('password',this.LoginForm.password)
        console.log(formData)
        axios.post(
          "http://127.0.0.1:5000/login",
          formData,
      ).then(res => {
        
        this.message = res.data.data.message
        
        if (this.message == 'success')
        {
          console.log('submit!');
          this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.$router.push('/Home')
        }
        else
        {
          console.log('submit!');
          this.$message({
          message: '登陆失败',
          type: 'warning'
        });
        }
        // console.log(res)
      }).catch(error =>{
        
      })

        
      },
      toRegister(){
        this.$router.push('/Register');
        console.log('1')
      },
      onHome(){
        this.$router.push('/Home')
      }
      
    }
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
  margin: 0px auto 0px auto;
}
.header>span{
  position: absolute;
  left: 20px;
  top: 10px;
}
  .image{
    background-image: url(../assets/banner.png);
    height: 1000px;
    width: 1903px;
    background-repeat: no-repeat;
    background-size: 694px 438px;
    background-color: #00d7c6;
    margin: 0px auto 0px 0px;
  }
  body{
    padding:0px;
    margin: 0px;
  }
  .Login-container{
    border-radius: 15px;
    background-clip: border-box;
    margin: 0px;
    width: 350px;
    position: absolute;
    left: 70%;
    top: 20%;
    padding: 35px 35px 15px 35px;
    background: #fff;
    opacity: 0.9;
    border: 1px solid #eaeaea;
    /* box-shadow: 0 0 25px #cac6c6; */
    
  }
  .login-title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>