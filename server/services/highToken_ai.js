const { Together } = require('together-ai');
require('dotenv').config();

if (!process.env.TOGETHER_API_KEY) {
  console.error("TOGETHER_API_KEY not set in .env");
  process.exit(1);
}

const together = new Together({
  api_key: process.env.TOGETHER_API_KEY
});

const fast_chat_bot = async (system_prompt, userPrompt) => {
  console.log("🚨 DEBUG userPrompt:", userPrompt);
console.log("🚨 Type:", typeof userPrompt, "Is array:", Array.isArray(userPrompt));
  if (!Array.isArray(userPrompt) || userPrompt.length === 0) {
    throw new Error("userPrompt must be a non-empty array of { role, content } objects");
  }

  let output = '';

  const stream = await together.chat.completions.create({
    model: 'meta-llama/Llama-Vision-Free', // ✅ correct model
    messages: [
      { role: 'system', content: system_prompt },
      ...userPrompt
    ],
    stream: true,
  });

  for await (const chunk of stream) {
    output += chunk.choices[0]?.delta?.content || '';
  }

  return output;
};

module.exports = fast_chat_bot;
