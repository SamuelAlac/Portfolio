require('dotenv').config();
const { createStuffDocumentsChain } = require('langchain/chains/combine_documents')
const { createRetrievalChain } = require('langchain/chains/retrieval')
const { ConversationChain } = require('langchain/chains')

const { llm, prompt, blogMemory, blogMakerPrompt } = require('./llm')

const createChain = async (vectorStore) =>{
    try{
        const retriever = vectorStore.asRetriever({
            k:3,
        });

        const chain = await createStuffDocumentsChain({ llm, prompt });
        const retrieverChain = createRetrievalChain({ combineDocsChain: chain, retriever });
        
        return retrieverChain;
    }catch(err){
        console.log(err)
    }
}

const blogChain = new ConversationChain({ llm, prompt: blogMakerPrompt, memory: blogMemory })

module.exports = { createChain, blogChain };