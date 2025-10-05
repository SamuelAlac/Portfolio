require('dotenv').config()
const { ChatGoogleGenerativeAI } = require('@langchain/google-genai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { BufferMemory } = require('langchain/memory')

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
    - If the question is not related to Sam, respond:
    "Sorry, I can only answer questions about Samuel Vincent Alac."


    Context: {context}
    History: {history}
    Question: {input}
`);

const memory = new BufferMemory({
    memoryKey: 'history',
    returnMessages: true,
});

module.exports = { llm, prompt, memory };