<template>
  <div class="m-regiest">
    <header>
      <div class="wrapper">
        <nuxt-link
          class="site-logo"
          to="/"
        >美团</nuxt-link>
        <div class="login-block">
          <span>已有美团账号？</span>
          <a
            class="btn btn-small login"
            href="/login"
          >登录</a>
        </div>
      </div>
    </header>
    <div class="content">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item
          label="手机号"
          prop="phoneNum"
        >
          <el-input v-model.number="form.phoneNum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="sendSMS">免费获取短信动态码</el-button>
        </el-form-item>
        <el-form-item
          label="短信动态码"
          prop="verificationCode"
        >
          <el-input v-model.number="form.verificationCode"></el-input>
        </el-form-item>
        <el-form-item
          label="创建密码"
          prop="password"
        >
          <el-input
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="repeatPassword"
        >
          <el-input
            v-model="form.repeatPassword"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="regiest-btn"
            @click="onSubmit"
          >同意以下协议并注册</el-button>
        </el-form-item>
        <div class="term">
          <a
            class="f1"
            href="http://www.meituan.com/about/terms"
            target="_blank"
          >《美团网用户协议》</a>
        </div>
      </el-form>
    </div>
    <footer class="footer--mini">
      <p class="copyright">
        ©<a
          class="f1"
          href="https://www.meituan.com"
        >meituan.com</a>&nbsp;
        <a
          class="f1"
          target="_blank"
          href="http://www.miibeian.gov.cn/"
        >京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
let CryptoJS = require('crypto-js')
import { SignUp, SignIn, VerificationCode } from '@/api/user'
import request from '@/api/request'
import url from '@/api/url'

export default {
  layout: 'blank',
  data() {
    //  手机号校验函数
    let validatorPhoneNum = (rule, value, callback) => {
      let test = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
      if (test.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }

    // 短信验证码校验函数
    let validatorVerificationCode = (rule, value, callback) => {
      if (value === this.form.oldVerificationCode) {
        callback()
      } else {
        callback(new Error('请输入正确的短信验证码'))
      }
    }

    // 校验密码
    let validatorPassword = (rule, value, callback) => {
      if (this.form.password.length < 6) {
        callback(new Error('密码太短，至少6个字符'))
      } else {
        if (
          this.form.repeatPassword.trim().length !== 0 &&
          this.form.password !== this.form.repeatPassword
        ) {
          callback(new Error('两次输入的密码不相等'))
        } else {
          callback()
        }
      }
    }

    //  校验再次输入密码
    let validatorRepeatPassword = (rule, value, callback) => {
      if (this.form.password !== this.form.repeatPassword) {
        callback(new Error('两次输入的密码不相等'))
      } else {
        callback()
      }
    }

    return {
      form: {
        phoneNum: '',
        password: '',
        repeatPassword: '',
        verificationCode: '',
        oldVerificationCode: '',
        md5Password: ''
      },
      rules: {
        phoneNum: [
          { required: true, message: '请输入您的手机号码' },
          { type: 'number', message: '手机号必须为数字' },
          { validator: validatorPhoneNum, trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入您的短信验证码' },
          { type: 'number', message: '短信验证码必须为数字' },
          { validator: validatorVerificationCode, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { validator: validatorPassword, trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请再次输入密码' },
          { validator: validatorRepeatPassword, trigger: 'blur' }
        ]
      },
      canRegister: true
    }
  },
  methods: {
    // 发送短信验证码
    sendSMS() {
      this.$refs.form.validateField('phoneNum', rs => {
        if (rs == '') {
          VerificationCode({
            phoneNum: this.form.phoneNum
          })
            .then(data => {
              this.$message({
                message: data.msg,
                type: 'success'
              })
              this.form.oldVerificationCode = data.VerificationCode
              this.form.verificationCode = data.VerificationCode
            })
            .catch(e => {
              this.$message({
                message: '网络异常',
                type: 'error'
              })
            })
        }
      })
    },
    // 注册用户
    onSubmit() {
      if (this.canRegister) {
        this.canRegister = false
        this.$refs.form.validate(ok => {
          if (ok) {
            this.form.md5Password = CryptoJS.MD5(this.form.password).toString()
            request.defaults.baseURL = url.localhost
            SignUp({
              phoneNum: this.form.phoneNum,
              password: this.form.md5Password,
              userName: '',
              email: ''
            })
              .then(data => {
                this.$message({
                  message: data.msg,
                  type: 'success'
                })
                setTimeout(() => {
                  SignIn({
                    username: this.form.phoneNum,
                    password: this.form.md5Password
                  })
                    .then(res => {
                      request.defaults.baseURL = url.Api
                      this.canRegister = true
                      this.$store.commit('setUser', res.userInfo)
                      request.defaults.headers.Authorization =
                        'Bearer ' + res.token
                      this.$router.replace('/')
                    })
                    .catch(err => {
                      console.log(err)
                      this.canRegister = true
                      this.$message({
                        message: '网络异常',
                        type: 'error'
                      })
                    })
                }, 2000)
              })
              .catch(e => {
                request.defaults.baseURL = url.Api
                this.canRegister = true
                this.$message({
                  message: '网络异常',
                  type: 'error'
                })
              })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/regiest/index.styl';
</style>
