import { ChatInfo } from "./components/ChatInfo"

const ChatbotPage = () => {
  return (
    <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <ChatInfo/>
     </div>

     <div className="space-y-5">
      
     </div>
    </div>
  )
}

export default ChatbotPage