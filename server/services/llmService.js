import dotenv from 'dotenv';
dotenv.config();

import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function callClaude(
  systemPrompt,
  history,
  userMessage
) {
  try {
    const completion =
      await groq.chat.completions.create({
        model: 'llama-3.1-8b-instant',

        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },

          ...history,

          {
            role: 'user',
            content: userMessage,
          },
        ],

        temperature: 0.2,

        response_format: {
          type: 'json_object',
        },
      });

    const text =
      completion.choices[0].message.content;

    console.log('GROQ RESPONSE:', text);

    return JSON.parse(text);
  } catch (error) {
    console.log(
      'GROQ SERVICE ERROR:',
      error
    );

    throw error;
  }
}