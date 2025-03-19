<template>
    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="COid" label="企业编号" width="180" />
    <el-table-column prop="COname" label="企业名称" width="180" />
    <el-table-column prop="COability" label="企业法人" />
    <el-table-column prop="INtroduce" label="企业介绍" />
  </el-table>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            tableData : []
        }
    },
    async created() {  
    try {  
      const response = await axios.get('http://127.0.0.1:5000/get_table_data'); // 调用 Flask API  
      this.tableData = response.data; // 更新数据  
    } catch (error) {  
      console.error(error);  
    }  
  },  
}
</script>