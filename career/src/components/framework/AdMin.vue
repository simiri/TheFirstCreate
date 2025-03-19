<template>
    <form @submit.prevent="addItem" style="width: 50%;">  
      <el-form-item label="">  
        <el-input v-model="newItem.user" placeholder="账号"></el-input>  
      </el-form-item>  
      <el-form-item label="">  
        <el-input v-model="newItem.pass" placeholder="密码"></el-input>  
      </el-form-item> 
      <el-button class="mt-4" style="width: 100%" @click="onAddItem">
      添加
      </el-button>  
    </form>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            newItem:{
                user:'',
                pass:''
            }
        }
    },
    methods:{
        onAddItem(){
            let formData = new FormData()
            formData.append('user',this.newItem.user)
            formData.append('pass',this.newItem.pass)
            axios.post(
          "http://127.0.0.1:5000/User",
          formData,
          {
            headers:{
              "Content-Type":"application/json"
            }
          }
      ).then(res => {
        console.log(res.message)
      })
        }
    }

}
</script>