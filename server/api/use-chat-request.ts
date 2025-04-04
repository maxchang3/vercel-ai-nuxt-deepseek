import { createDeepSeek } from '@ai-sdk/deepseek'
import { streamText, Message } from 'ai'

export default defineLazyEventHandler(async () => {
  const deepseek = createDeepSeek({
    apiKey: useRuntimeConfig().deepseekApiKey,
  })

  return defineEventHandler(async (event: any) => {
    // Extract the `messages` from the body of the request
    const { message } = await readBody(event)

    // Implement your own logic here to add message history
    const previousMessages: Message[] = []
    const messages = [...previousMessages, message]

    // Call the language model
    const result = streamText({
      model: deepseek('deepseek-chat'),
      messages,
      async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
        // Implement your own logic here, e.g. for storing messages
      },
    })

    // Respond with the stream
    return result.toDataStreamResponse()
  })
})
