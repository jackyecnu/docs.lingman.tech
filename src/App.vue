<script setup lang="ts">
import MD5 from 'md5'
import { ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'


const loginForm = ref<any>(null)
const loading = ref(false)
const btnText = computed(() => (loading.value ? '登录中...' : '登录'))
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})
const model = reactive({
  account: '',
  password: '',
})

document.cookie = `bbb=; expires=${new Date(Date.now() - 24 * 60 * 60 * 1000 * 365).toUTCString()};`

const submit = () => {
  const bbb = MD5(model.account + model.password).toUpperCase()
  // @ts-ignore
  document.cookie = `bbb=${bbb}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000 * 365).toUTCString()};`
  location.href = '/'
}
</script>

<template>
  <div class="login">
    <el-card shadow="always" :body-style="{ padding: '20px', minWidth: '420px' }">
      <template #header>
        <div class="text-center text-5 font-bold">
          <span>登录</span>
        </div>
      </template>
      <div class="qrbox">
        <div class="form-box">
          <el-form ref="loginForm" class="form" :model="model" :rules="rules">
            <el-form-item prop="account">
              <el-input v-model="model.account" size="large" clearable placeholder="账号" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="model.password" size="large" show-password clearable placeholder="密码" />
            </el-form-item>
            <el-form-item>
              <el-button :loading="loading" type="primary" class="submit" @click="submit">
                {{ btnText }}
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" >
.login {
  transition: transform 1s;
  transform: scale(1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .text {
      font-size: 16px;
    }

    .submit {
      width: 100%;
    }

  }
}

.qrbox {
  display: flex;
  flex-direction: column;
  align-items: center;

  .code-box {
    min-width: 310px;
    min-height: 310px;
    padding: 10px;
  }

  .form-box {
    min-width: 310px;
    min-height: 310px;
    height: 310px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
