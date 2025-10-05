const { createChain } = require("../artificial-intelligence/chain");
const { memory } = require("../artificial-intelligence/llm");
const { createVectorStore } = require("../artificial-intelligence/loader");

// @desc    GET Chat History
// @route   GET api/ai/history/
exports.getChatHistory = async (req, res, next) =>{
    try{
        const chatMemory = await memory.loadMemoryVariables();
        const history = chatMemory.history.map(message =>{
            return{
                type: message.getType?.(),
                content: message.content,
            };
        });
        res.status(200).json(history);
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
};

// @desc    POST Chat Message
// @route   POST api/ai/message/
exports.postChat = async (req, res, next) =>{
    try{
        const vectorStore = await createVectorStore();
        const retrievalChain = await createChain(vectorStore);
        const chatMemory = await memory.loadMemoryVariables();
        const userInput = { input: req.body.input };
        const chatHistory = {
            input: userInput.input,
            history: chatMemory.history,
        };
        const response = await retrievalChain.invoke(chatHistory);
        console.log(chatMemory);
        res.status(200).json(response.answer);
        await memory.saveContext(userInput,{
            output: response.answer,
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
}