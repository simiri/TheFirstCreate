<template>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="EMid" label="招聘信息id" width="150" />
      <el-table-column prop="EMNo" label="招聘单位编号" width="180" />
      <el-table-column prop="Container" label="招聘信息内容" width="180" />
      <el-table-column prop="date" label="发布日期" width="180" />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-button class="mt-4" style="width: 100%" @click="onAddItem">
      Add Item
    </el-button> -->
    <form @submit.prevent="addItem" style="width: 50%;">  
      <el-form-item label="">  
        <el-input v-model="newItem.EMid" placeholder="招聘信息id"></el-input>  
      </el-form-item>  
      <el-form-item label="">  
        <el-input v-model="newItem.EMNo" placeholder="招聘单位编号"></el-input>  
      </el-form-item>
      <el-form-item label="">  
        <el-input v-model="newItem.Container"  placeholder="招聘信息内容"></el-input>  
      </el-form-item>
      <el-form-item label="">  
        <el-input v-model="newItem.date"  placeholder="发布日期"></el-input>  
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
      return {  
      // ... 其他数据  
      newItem: {  
        EMid: '', // 初始为空字符串  
        EMNo: '', // 初始为空字符串  
        Container:'',
        date:''
      },  
       tableData:[]
    };

    },
    async created() {  
    try {  
      const response = await axios.get('http://127.0.0.1:5000/getEmployeer'); // 调用 Flask API  
      this.tableData = response.data; // 更新数据  
    } catch (error) {  
      console.error(error);  
    }  
  },
    methods:{
      onAddItem(){
        let formData = new FormData()
        formData.append('EMid',this.newItem.EMid)
        formData.append('EMNo',this.newItem.EMNo)
        formData.append('Container',this.newItem.Container)
        formData.append('date',this.newItem.date)
        axios.post(
          "http://127.0.0.1:5000/InputEmployeer",
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