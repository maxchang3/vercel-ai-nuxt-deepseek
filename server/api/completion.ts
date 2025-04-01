import { createDeepSeek } from '@ai-sdk/deepseek'
import { streamText } from 'ai'

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().deepseekApiKey
  if (!apiKey) throw new Error('Missing DeepSeek API key')
  const deepseek = createDeepSeek({ apiKey })

  return defineEventHandler(async (event: any) => {
    // Extract the `prompt` from the body of the request
    const { prompt } = await readBody(event)

    // Ask DeepSeek for a streaming chat completion given the prompt
    const result = streamText({
      model: deepseek('deepseek-chat'),
      prompt,
    })

    // Respond with the stream
    return result.toDataStreamResponse()
  })
})
