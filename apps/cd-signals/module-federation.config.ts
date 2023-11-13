import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cd-signals',
  exposes: {
    './Routes': 'apps/cd-signals/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
