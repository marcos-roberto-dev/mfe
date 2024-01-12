import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vanillaExtractRollupPlugin, vanillaExtractStencilPlugin } from 'stencil-vanilla-extract-plugin';
import { OutputTarget } from '@stencil/core/internal';
export const config: Config = {
  namespace: 'ui-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@repo/ui-component',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }) as OutputTarget,
    vueOutputTarget({
      componentCorePackage: '@repo/ui-component',
      proxiesFile: '../vue-library/lib/component.ts',
      includeDefineCustomElements: true,
    }) as OutputTarget,
    angularOutputTarget({
      componentCorePackage: '@repo/ui-component',
      directivesProxyFile: '../angular-library/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../angular-library/libs/stencil-wrapper/src/lib/index.ts',
    }) as OutputTarget,
  ],
  plugins: [vanillaExtractStencilPlugin()],
  rollupPlugins: {
    before: [vanillaExtractRollupPlugin()],
  },
  testing: {
    browserHeadless: 'new',
  },
};
