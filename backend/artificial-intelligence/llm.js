require('dotenv').config()
const { ChatGoogleGenerativeAI } = require('@langchain/google-genai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { BufferMemory } = require('langchain/memory')
const { UpstashRedisChatMessageHistory } = require('@langchain/community/stores/message/upstash_redis')

const llm = new ChatGoogleGenerativeAI({
    model: 'gemini-2.0-flash',
    temperature: 0,
});

const prompt = ChatPromptTemplate.fromTemplate(`
    You are **Altera**, a polite and concise AI assistant. 
    Your only purpose is to answer questions or have short not really short conversations
    based on the given context and conversation history. 

    Guidelines:
    - Keep responses short, clear, and friendly.
    - If you don't know the answer just be honest to them.
    - If they ask information you may tell them a short info about yourself but dont engage to unrelated question.


    Context: {context}
    History: {history}
    Question: {input}
`);

const blogMakerPrompt = ChatPromptTemplate.fromTemplate(`
    You are **Altera**, an AI Assistant that creates high-quality blog posts.

    ## Guidelines:
    - Audience: students and educators
    - Topic: {topic}
    - Target Length: 1000 words
    - Style/Tone: professional but friendly

    ## Requirements:
    1. Generate an engaging **Title**.
    2. Write an **Introduction** that hooks the reader.
    3. Organize the **Main Content** with H2/H3 subheadings.
    4. Add examples, insights, or actionable tips where relevant.
    5. End with a clear **Conclusion** (and optional Call-to-Action).
    6. Ensure the post is plagiarism-free, factually accurate, and SEO-friendly.

    ## Output Format:
    - Title
    - Introduction
    - Body (with subheadings)
    - Conclusion
    - Call-to-Action (optional)

    History: {history}
`)

const upstashChatHistory = new UpstashRedisChatMessageHistory({
    sessionId: 'session123',
    config: {
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }
});

const blogMemory = new BufferMemory({
    memoryKey: 'history',
    chatHistory: upstashChatHistory,
});

const memory = new BufferMemory({
    memoryKey: 'history',
    returnMessages: true,
});

module.exports = { llm, prompt, blogMakerPrompt, memory, blogMemory };