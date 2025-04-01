# AI SDK, Nuxt and DeepSeek Chat Example
<small>Based on [vercel/ai/nuxt-openai](https://github.com/vercel/ai/tree/main/examples/nuxt-openai)</small>

This example shows how to use the [AI SDK](https://sdk.vercel.ai/docs) with [Nuxt](https://nuxt.com/), and [DeepSeek](https://deepseek.com) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maxchang3/vercel-ai-nuxt-deepseek&env=NUXT_DEEPSEEK_API_KEY&envDescription=DeepSeek%20API%20Key&envLink=https://platform.deepseek.com/api_keys&project-name=ai-chat&repository-name=nuxt-ai-chat)

## How to use

Execute `nuxi` to bootstrap the example:

```bash
npx nuxi@latest init -t github:maxchang3/vercel-ai-nuxt-deepseek nuxt-deepseek
```

To run the example locally you need to:

1. Sign up at [DeepSeek Platform](hhttps://platform.deepseek.com/sign_in).
2. Go to [API keys](https://platform.deepseek.com/api_keys) and create an API KEY.
3. Set the required DeepSeek environment variable as the token value as shown [the example env file](./.env.example) but in a new file called `.env`.
4. `pnpm install` to install the required dependencies.
5. `pnpm dev` to launch the development server.

## Deploy to Vercel

This example can be directly deployed to Vercel, you can run the following commands:

```bash
pnpm run build
vercel deploy
```

This example is configured to use the `vercel-edge` [[Nitro preset](https://nitro.unjs.io/deploy/providers/vercel#vercel-edge-functions)].
This means that the example will be deployed to Vercel's Edge Network.
You can use different providers, such as `vercel` by modifying your `nuxt.config.ts` file, or using the `NITRO_PRESET` environment variable.

## Learn More

To learn more about DeepSeek, Nuxt, and the AI SDK take a look at the following resources:

- [AI SDK docs](https://sdk.vercel.ai/docs) - learn mode about the AI SDK
- [Vercel AI Playground](https://play.vercel.ai) - compare and tune 20+ AI models side-by-side
- [DeepSeek Documentation](https://api-docs.deepseek.com/) - learn about DeepSeek features and API.
- [Nuxt Documentation](https://nuxt.com/docs) - learn about Nuxt features and API.
