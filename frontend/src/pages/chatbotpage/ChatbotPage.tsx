import { Chatbox } from "./components/chatbox"
import { Info } from "./components/Info"

const ChatbotPage = () => {
  return (
    <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <Info/>
     </div>

     <div className="space-y-5 md:mt-5 lg:ms-5 lg:mt-0">
        <Chatbox/>
     </div>
    </div>
  )
}

export default ChatbotPage