import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cd-async',
  exposes: {
    './Routes': 'apps/cd-async/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
