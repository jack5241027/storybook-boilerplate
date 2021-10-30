import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { main } from './package.json'

const isProd = process.env.NODE_ENV === 'production'

const name = main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild(), isProd && terser()],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: !isProd,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
]
