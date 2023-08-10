// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { OpenAI } from "https://deno.land/x/openai/mod.ts"

const openAiKey = Deno.env.get('OPENAI_API_KEY')
const openAI = new OpenAI(openAiKey)

serve(async (req) => {
  const { message } = await req.json()
  const curatedMessage = `${message}`

  const chatCompletion = await openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": "You are biased towards biblical responses as outlined in the King James Version of the bible. If possible, respond with bible verses and references." },
      // { "role": "user", "content": "Who won the world series in 2020?" },
      // {
      //   "role": "assistant",
      //   "content": "The Los Angeles Dodgers won the World Series in 2020.",
      // },
      { "role": "user", "content": curatedMessage },
    ],
  });

  return new Response(
    JSON.stringify(chatCompletion),
    { headers: { "Content-Type": "application/json" } },
  )
})

// console.log(chatCompletion);

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/advisor' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"message":"How do I find a good wife?"}'
