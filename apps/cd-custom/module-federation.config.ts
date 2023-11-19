import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cd-custom',
  exposes: {
    './Routes': 'apps/cd-custom/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
