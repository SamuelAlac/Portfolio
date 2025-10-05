require('dotenv').config()
const { TextLoader } = require('langchain/document_loaders/fs/text')
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter')
const { CohereEmbeddings } = require('@langchain/cohere')
const { FaissStore } = require('@langchain/community/vectorstores/faiss')
const fs = require("fs");
const path = require("path");


const embeddings = new CohereEmbeddings({
    model: 'embed-english-v3.0',
});

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
});

const createVectorStore = async () =>{
    try{
        const loader = new TextLoader(path.resolve(__dirname, '../Portfolio.md'));
        const docs = await loader.load();
        const splitDocs = await splitter.splitDocuments(docs);
        const vectorStore = await FaissStore.fromDocuments(splitDocs, embeddings);
        return vectorStore;
    }catch(err){
        console.log(err)
    }
}

module.exports = { createVectorStore };