const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env: {
    baseUrl: 'http://127.0.0.1:3000',
    ApiUrl: 'http://127.0.0.0.1:7001'
  },
  // no work
  // server: {
  //   port: 7001,
  //   host: '127.0.0.1'
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: "美团网",
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/main.css',
    '~assets/css/main.styl',
    'swiper/dist/css/swiper.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/plugins/storage',
      ssr: false
    },
    {
      src: '@/plugins/lodash',
      ssr: true
    },
    {
      src: '@/plugins/swiper',
      ssr: false
    },
    {
      src: '@/plugins/vue-lazyload',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1:7001'
  },

  /*
   ** Build configuration
   */
  vendor: ['axios'],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
