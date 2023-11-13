import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cd-onpush',
  exposes: {
    './Routes': 'apps/cd-onpush/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
