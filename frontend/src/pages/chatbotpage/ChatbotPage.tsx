import { ChatInfo } from "./components/ChatInfo"
import { ChatStatus } from "./components/ChatStatus"

const ChatbotPage = () => {
  return (
    <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <ChatInfo/>
     </div>

     <div className="space-y-5 md:mt-5 lg:ms-5 lg:mt-0">
        <ChatStatus/>
     </div>
    </div>
  )
}

export default ChatbotPage