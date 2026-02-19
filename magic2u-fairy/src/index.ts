export interface Env {
  OPENAI_API_KEY: string
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 })
    }

    try {
      const { messages } = await request.json()

      const openaiResponse = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages
          })
        }
      )

      const data = await openaiResponse.json()

      return new Response(
        JSON.stringify({
          message: data.choices?.[0]?.message
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500 }
      )
    }
  }
}
