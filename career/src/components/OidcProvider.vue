<template>
    <div class="auth-container">
      <!-- 头部 -->
      <header class="auth-header">
        <img src="../assets/logo.png" alt="OP Logo" class="op-logo" />
      </header>
  
      <!-- 主体内容 -->
      <main class="auth-content">
        <!-- 登录表单 -->
        <div class="login-form">
          <h2>密码登录</h2>
          <p>推荐使用快捷登录，防止盗号。</p>
  
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <input
                type="text"
                placeholder="支持QQ号/邮箱/手机号登录"
                v-model="username"
                required
              />
            </div>
  
            <div class="input-group">
              <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
                required
              />
            </div>
  
            <button type="submit" class="login-btn">登录</button>
          </form>
  
          <div class="links">
            <a href="#" @click.prevent="handleForgotPassword">找回密码</a>
            <a href="#" @click.prevent="handleRegister">注册账号</a>
            <a href="#" @click.prevent="handleFeedback">意见反馈</a>
          </div>
        </div>
  
        <!-- 权限说明 -->
        <div class="permissions">
          <h3>授权说明</h3>
          <p>{{ appName }} 将获取以下权限：</p>
          <ul>
            <li>
              <label>
                <input type="checkbox" v-model="allSelected" @change="toggleAllPermissions" />
                全选
              </label>
            </li>
            <li v-for="(permission, index) in permissions" :key="index">
              <label>
                <input type="checkbox" v-model="selectedPermissions" :value="permission" />
                {{ permission }}
              </label>
            </li>
          </ul>
          <p>授权即同意 <a href="#">服务协议</a> 和 <a href="#">隐私保护指引</a></p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'
  const username = ref('');
  const password = ref('');
  
  // 权限相关数据
  const permissions = ref([
    '使用你的头像、昵称信息',
    '访问你的公开资料',
    '获取你的地理位置'
  ]);
  const selectedPermissions = ref([]);
  const allSelected = ref(false);
  
  // 全选/取消全选功能
  const toggleAllPermissions = () => {
    if (allSelected.value) {
      selectedPermissions.value = [...permissions.value];
    } else {
      selectedPermissions.value = [];
    }
  };
  
  // 模拟登录处理函数
  const handleLogin  = async () => {
    try {
    // 发送 POST 请求到后端
    const response = await axios.post('http://localhost:5000/login', {
      username: username.value,
      password: password.value,
    });

    // 处理成功响应
    console.log('登录成功:', response.data);
    alert('登录成功！');
  } catch (error) {
    // 处理错误响应
    console.error('登录失败:', error.response?.data || error.message);
    alert('登录失败，请检查用户名和密码。');
  }
  };
  
  // 模拟其他事件处理函数
  const handleForgotPassword = () => {
    console.log('跳转到找回密码页面');
  };
  const handleRegister = () => {
    console.log('跳转到注册页面');
  };
  const handleFeedback = () => {
    console.log('跳转到意见反馈页面');
  };
  </script>
  
  <style scoped>
  /* 全局样式 */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  /* 授权容器 */
  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  /* 头部 */
  .auth-header {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .op-logo {
    height: 40px;
  }
  
  /* 主体内容 */
  .auth-content {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
  }
  
  .login-form{
    width: 48%;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    justify-content: center;
  }
  
  .permissions {
    width: 48%;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  /* 登录表单 */
  .login-form h2 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .login-form p {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: #4caf50;
    outline: none;
  }
  
  .login-btn {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: #fff;
    background-color: #27ae60; /* 青绿色 */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-btn:hover {
    background-color: #2ecc71; /* 更深一点的青绿色 */
  }
  
  .links a {
    font-size: 0.9rem;
    color: #4caf50;
    text-decoration: none;
    margin-right: 1rem;
  }
  
  .links a:hover {
    color: #45a049;
  }
  
  /* 权限说明 */
  .permissions h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .permissions p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .permissions ul {
    list-style: none;
    padding: 0;
  }
  
  .permissions li {
    margin-bottom: 0.5rem;
  }
  
  .permissions label {
    display: flex;
    align-items: center;
  }
  
  .permissions input[type="checkbox"] {
    margin-right: 0.5rem;
  }
  
  .permissions a {
    color: #27ae60; /* 青绿色 */
    text-decoration: none;
  }
  
  .permissions a:hover {
    text-decoration: underline;
  }
  </style>