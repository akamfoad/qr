import { Options, defineConfig } from 'tsup';

export default defineConfig((options) => {
  const commonOptions: Partial<Options> = {
    entry: {
      qr: 'src/index.ts',
    },
    clean: true,
    ...options,
  };

  return [
    {
      ...commonOptions,
      clean: true,
      platform: 'neutral',
      outDir: 'dist',
      dts: true,
      format: 'esm',
      outExtension: () => ({ js: '.mjs' }),
    },
    {
      ...commonOptions,
      format: 'cjs',
      outDir: 'dist/cjs/',
      dts: true,
      outExtension: () => ({ js: '.cjs' }),
    },
  ];
});
