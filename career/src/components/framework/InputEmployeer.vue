<template>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="EMid" label="招聘信息id" width="150" />
      <el-table-column prop="EMNo" label="招聘单位编号" width="180" />
      <el-table-column prop="Container" label="招聘信息内容" width="180" />
      <el-table-column prop="date" label="发布日期" width="180" />
      <el-table-column fixed="right" label="方式" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)">
            简历投递
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import axios from 'axios'
export default{
    data(){
      return {  
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
      
    }
}
</script>