import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['cd-default', 'cd-onpush', 'cd-signals'],
};

export default config;
