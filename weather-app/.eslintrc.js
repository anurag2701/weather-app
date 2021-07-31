module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prefer-const': 'off',
    'no-console': 'off',
    'import/order': 'off',
    'no-prototype-builtins': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-prop-types': 'off ',
    'vue/require-default-prop': 'off ',
    'vue/no-use-v-if-with-v-for': 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }]
  }
}
