import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/countrycode.scss',
          dest: '.',
          rename: 'style.scss'
        },
      ],
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'IntlTelData',
      // the proper extensions will be added
      fileName: 'intl-tel-data',
    },
  },
});
