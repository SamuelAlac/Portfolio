import { Chatform } from "@/features/chatbot/components/Chatform"
import { History } from "@/features/chatbot/components/History"

export const ChatInfo = () => {
  return (
    <section className="w-full h-165 flex flex-col justify-between">
      <div className="p-5 flex flex-col custom-scrollbar overflow-y-auto">
        <h1 className="text-3xl font-bold text-center">Public AI Chatbot</h1>
        <History/>
      </div>
      
      <div className="p-5 mb-5">
        <Chatform/>
      </div>
    </section>
  )
}
