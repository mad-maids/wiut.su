export default {
  target: 'static',
  router: {
    base: process.env.BASE_PATH || '/',
  },
  generate: {
    fallback: '404.html',
  },
  env: {
    fathomToken: process.env.FATHOM_TOKEN || null,
  },
  head: {
    title: 'Students Union',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'theme-color', content: '#040e21' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  css: ['@/assets/scss/index.scss'],
  plugins: [
    '~/plugins/vue-youtube-embed.js',
    { src: '~/plugins/user-timezone.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      './assets/scss/variables/main.scss',
      './assets/scss/mixins/main.scss',
    ],
  },
  modules: ['@nuxt/content', '@nuxtjs/svg'],
  content: {},
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
    transpile: ['vue-youtube-embed'],
  },
}
