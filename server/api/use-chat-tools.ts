import { createDeepSeek } from '@ai-sdk/deepseek'
import { streamText } from 'ai'
import { z } from 'zod'

export default defineLazyEventHandler(async () => {
  const deepseek = createDeepSeek({
    apiKey: useRuntimeConfig().deepseekApiKey,
  })

  return defineEventHandler(async (event: any) => {
    const { messages } = await readBody(event)

    const result = streamText({
      model: deepseek('deepseek-chat'),
      messages,
      toolCallStreaming: true,
      maxSteps: 5, // multi-steps for server-side tools
      tools: {
        // server-side tool with execute function:
        getWeatherInformation: {
          description: 'show the weather in a given city to the user',
          parameters: z.object({ city: z.string() }),
          execute: async ({ }: { city: string }) => {
            // Add artificial delay of 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000))

            const weatherOptions = [
              'sunny',
              'cloudy',
              'rainy',
              'snowy',
              'windy',
            ]
            return weatherOptions[
              Math.floor(Math.random() * weatherOptions.length)
            ]
          },
        },
        // client-side tool that starts user interaction:
        askForConfirmation: {
          description: 'Ask the user for confirmation.',
          parameters: z.object({
            message: z
              .string()
              .describe('The message to ask for confirmation.'),
          }),
        },
        // client-side tool that is automatically executed on the client:
        getLocation: {
          description:
            'Get the user location. Always ask for confirmation before using this tool.',
          parameters: z.object({}),
        },
      },
    })

    return result.toDataStreamResponse()
  })
})
