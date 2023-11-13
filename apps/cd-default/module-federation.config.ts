import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cd-default',
  exposes: {
    './Routes': 'apps/cd-default/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
