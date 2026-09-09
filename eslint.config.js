import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist/**', 'dist-ssr/**', 'coverage/**', 'public/**']),
  {
    files: ['**/*.{js,mjs,cjs,jsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    }
  },
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  skipFormatting
])
