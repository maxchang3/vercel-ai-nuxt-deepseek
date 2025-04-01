import { createDeepSeek } from '@ai-sdk/deepseek'
import { streamText } from 'ai'

export default defineLazyEventHandler(async () => {
  const deepseek = createDeepSeek({
    apiKey: useRuntimeConfig().deepseekApiKey,
  })
  console.log(useRuntimeConfig())
  return defineEventHandler(async (event: any) => {
    // Extract the `messages` from the body of the request
    const { messages } = await readBody(event)

    // Call the language model
    const result = streamText({
      model: deepseek('deepseek-chat'),
      messages,
      async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
        // implement your own logic here, e.g. for storing messages
        // or recording token usage
      },
    })

    // Respond with the stream
    return result.toDataStreamResponse()
  })
})
