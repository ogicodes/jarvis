import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama({
  // optional settings, e.g.
  baseURL: "http://108.168.59.153:11434/api",
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: ollama("llama3.2:1b"),
    messages,
  });
  return result.toDataStreamResponse();
}
