import type { PluginConfigInput } from 'every-plugin';
import type Plugin from './src/index';
import packageJson from './package.json' with { type: 'json' };
import 'dotenv/config';

export default {
  pluginId: packageJson.name,
  port: 3014,
  config: {
    variables: {
      network: 'mainnet',
      contractId: 'social.near',
    },
    secrets: {
      RELAYER_ACCOUNT_ID: process.env.RELAYER_ACCOUNT_ID!,
      RELAYER_PRIVATE_KEY: process.env.RELAYER_PRIVATE_KEY!,
      STRIPE_SECRET_KEY: undefined,
      STRIPE_WEBHOOK_SECRET: undefined,
      GELATO_API_KEY: undefined,
      GELATO_WEBHOOK_SECRET: undefined,
      PRINTFUL_API_KEY: undefined,
      PRINTFUL_STORE_ID: undefined,
      DATABASE_URL: undefined,
      DATABASE_AUTH_TOKEN: undefined,
    },
  } satisfies PluginConfigInput<typeof Plugin>,
};
