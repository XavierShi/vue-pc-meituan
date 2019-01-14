<template>
  <div class="pg-unitive-login theme--www">
    <header class="header cf">
      <a
        class="site-logo"
        href="http://www.meituan.com"
      >美团网</a>
    </header>
    <div class="site-body-wrapper">
      <div class="site-body cf">
        <div class="promotion-banner">
          <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            width="480"
            height="370"
            alt="美团网"
          >
        </div>
        <div
          class="login-section"
          data-params="{&quot;service&quot;:&quot;www&quot;,&quot;isDialog&quot;:false }"
        >
          <form
            id="J-normal-form"
            action="/account/unitivelogin?risk_partner=0&amp;uuid=ca5381f384174178a546.1547427959.1.0.0&amp;service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
            method="POST"
            class="form form--stack"
          >
            <div
              class="validate-info"
              style="visibility:hidden"
            ></div>
            <span
              class="login-type"
              data-mtevent="login.mobile.switch"
            >
              <a
                id="J-mobile-link"
                href="/account/unitivelogin?service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F&amp;_nsmobilelogin=true"
              >
                手机动态码登录
                <i></i>
              </a>
              账号登录
            </span>
            <div class="form-field form-field--icon">
              <i class="icon icon-user"></i>
              <input
                id="login-email"
                type="text"
                class="f-text"
                name="email"
                placeholder="手机号/用户名/邮箱"
                value=""
              >
            </div>
            <div class="form-field form-field--icon">
              <i class="icon icon-password"></i>
              <input
                id="login-password"
                type="password"
                class="f-text"
                name="password"
                placeholder="密码"
              >
            </div>
            <div
              class="form-field J-form-field-captcha form-field--captcha"
              style="display:none"
            >
              <input
                id="captcha"
                type="text"
                class="f-text J-captcha-input"
                name="captcha"
                placeholder="验证码"
                autocomplete="off"
              >
              <img
                id="signup-captcha-img"
                height="36"
                width="72"
                class="signup-captcha-img"
                src="https://passport.meituan.com/account/captcha?uuid=ca5381f384174178a546.1547427959.1.0.0"
              >
              <a
                tabindex="-1"
                class="captcha-refresh inline-link"
                href="javascript:void(0)"
              >看不清楚？换一张</a>
            </div>
            <div class="form-field form-field--auto-login cf">
              <a
                tabindex="-1"
                href="https://passport.meituan.com/useraccount/retrievepassword?risk_partner=0&amp;service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
                target="_top"
                class="forget-password"
              >忘记密码？</a>
            </div>
            <div class="form-field form-field--ops">
              <input
                type="hidden"
                name="origin"
                value="account-login"
              >
              <input
                type="hidden"
                name="fingerprint"
                class="J-fingerprint"
                value="0-12-1-"
              >
              <input
                type="hidden"
                name="csrf"
                value="MpCrJg8S-CHtLTiRLFoD-6RMoaed9rhiHTbw"
              >
              <input
                data-mtevent="login.normal.submit"
                type="submit"
                class="btn"
                name="commit"
                value="登录"
              >
            </div>
            <p class="signup-guide">还没有账号？
              <a
                href="/account/unitivesignup?service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
                target="_top"
              >免费注册</a>
            </p>
          </form>

          <form
            id="J-mobile-form"
            action="/account/unitivemobilelogin?risk_partner=0&amp;uuid=ca5381f384174178a546.1547427959.1.0.0&amp;service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
            method="POST"
            class="form form--stack J-wwwtracker-form"
            style="display:none"
          >
            <div
              class="validate-info"
              style="visibility:hidden"
            ></div>

            <span
              class="login-type login-type--normal"
              data-mtevent="login.normal.switch"
            >
              <a
                id="J-normal-link"
                href="/account/unitivelogin?service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
              >
                普通方式登录
                <i></i>
              </a>
              账号登录
            </span>

            <div class="J-info form-field form-field--icon">
              <i class="icon icon-phone"></i>
              <input
                id="login-mobile"
                type="text"
                class="f-text"
                name="mobile"
                value=""
                placeholder="手机号"
              >
            </div>
            <div
              class="form-field J-form-field-captcha-mobile form-field--captcha-mobile"
              style="display:none;"
            >
              <i class="icon icon-captcha"></i>
              <input
                id="login-captcha"
                type="text"
                class="f-text"
                name="login-captcha"
                placeholder="验证码"
                autocomplete="off"
              >
              <img
                id="login-captcha-img"
                height="34"
                width="61"
                class="login-captcha-img"
                src="https://passport.meituan.com/account/captcha?uuid=ca5381f384174178a546.1547427959.1.0.0"
              >
              <a
                tabindex="-1"
                class="captcha-refresh inline-link"
                href="javascript:void(0)"
              >看不清楚？换一张</a>
            </div>

            <div class="form-field form-field--icon">
              <i class="icon icon-password"></i>
              <input
                id="login-verify-code"
                type="text"
                name="code"
                class="f-text"
                autocomplete="off"
                value=""
                placeholder="动态码"
              >
              <div
                class="form-field form-field--verify-mobile"
                style="top:19px;"
              >
                <input
                  id="J-verify-btn"
                  type="button"
                  class="btn-normal btn-mini"
                  value="获取手机动态码"
                >
              </div>
              <i
                class="form-uuid"
                style="display:none"
              >ca5381f384174178a546.1547427959.1.0.0</i>
            </div>

            <div class="form-field form-field--info">
              <span
                id="J-verify-tip"
                class="verify-tip"
              ></span>
            </div>

            <div class="form-field form-field--auto-login cf">
              <a
                tabindex="-1"
                href="https://passport.meituan.com/useraccount/retrievepassword?risk_partner=0&amp;service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fbj.meituan.com%252F"
                target="_top"
                class="forget-password"
              >忘记密码？</a>
            </div>
            <div class="form-field form-field--ops">
              <input
                type="hidden"
                name="origin"
                value="account-login"
              >
              <input
                type="hidden"
                name="fingerprint"
                class="J-fingerprint"
                value="0-12-1-"
              >
              <input
                type="hidden"
                name="csrf"
                value="MpCrJg8S-CHtLTiRLFoD-6RMoaed9rhiHTbw"
              >
              <input
                data-mtevent="login.mobile.submit"
                type="submit"
                class="btn"
                name="commit"
                value="登录"
              >
            </div>

            <p
              class="J-treaty-block treaty-block"
              style="display:none"
            >
              提示：
              未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意<a
                id="meituanTos"
                href="https://www.meituan.com/about/terms"
                class="j-terms"
                target="_blank"
              >《美团网用户协议》</a>
            </p>
          </form>

          <div class="oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
              <a
                class="oauth__link oauth__link--qq"
                href="/account/connect/tencent"
                data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
                target="_blank"
              ></a>
              <a
                class="oauth__link oauth__link--weibo"
                href="/account/connect/sina"
                data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a
              rel="nofollow"
              href="https://about.meituan.com/about.html"
            >关于美团</a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://zhaopin.meituan.com/"
            >加入我们</a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="http://emis.meishi.meituan.com/merchantsSettled"
            >商家入驻</a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.meituan.com/help/faq"
            >帮助中心</a>
          </li>
          <li class="last">
            <a href="http://meituan.com/mobile">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©<span>2019</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a
            href="http://www.miibeian.gov.cn/"
            target="_blank"
          >京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style scoped lang="stylus">
@import '~assets/css/login/index.styl';
</style>
