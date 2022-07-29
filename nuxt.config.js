export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // router: {
  //   middleware: ['auth']
  // },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: `${process.env.API_URL}/api/login`, method: 'post' },
          logout: { url: `${process.env.API_URL}/api/logout`, method: 'post' },
          user: { url: `${process.env.API_URL}/api/user`, method: 'get' }
        }
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: process.env.FACEBOOK_CLIENT_ID,
        scope: ['public_profile', 'email']
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/dashboard'
      // login: User will be redirected to this path if login is required.
      // logout: User will be redirected to this path if after logout, current route is protected.
      // home: User will be redirected to this path after login. (rewriteRedirects will rewrite this path)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
