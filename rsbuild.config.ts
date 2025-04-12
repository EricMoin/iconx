import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
export default defineConfig({
  plugins: [pluginReact(), pluginSass(),pluginSvgr({

    svgrOptions: {
      exportType: 'default',
    }
  })],
  html: {
    title: 'IconX',
    favicon: './assets/icons/favicon.ico',
  },
  source: {
    alias: {
      '@': './src',
      '@theme': './src/theme',
      '@common': './src/common',
      '@routes': './src/routes',
      '@features': './src/features',
      '@assets': './assets'
    }
  },
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({ target: 'react', autoCodeSplitting: true }),
      ],
    },
  },
});
