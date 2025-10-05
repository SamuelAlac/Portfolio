require('dotenv').config();
const { createStuffDocumentsChain } = require('langchain/chains/combine_documents')
const { createRetrievalChain } = require('langchain/chains/retrieval')

const { llm, prompt } = require('./llm')

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

module.exports = { createChain };