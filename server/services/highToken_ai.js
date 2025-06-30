const { Together }= require('together-ai');
require('dotenv').config()
if(!process.env.TOGETHER_API_KEY) 
  {
    console.error(" TOGETHER_API_KEY not set in .env");
    process.exit(1);
  }
const together = new Together(
  {
    api_key:process.env.TOGETHER_API_KEY
  });
const exp_chat_bot = async (system_prompt,userPrompt) => {
  let output ='';
  const stream = await together.chat.completions.create({
    model: 'deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free',
    messages: [
      { role: 'system', content: `${system_prompt}` },
      { role: 'user', content: `${userPrompt}` }

    ],
    stream: true,
  });
  for await (const chunk of stream) {
    // use process.stdout.write instead of console.log to avoid newlines
    // process.stdout.write(chunk.choices[0]?.delta?.content || '');
    output+= chunk.choices[0]?.delta?.content || '';
  }
  return output;

}
module.exports = exp_chat_bot;