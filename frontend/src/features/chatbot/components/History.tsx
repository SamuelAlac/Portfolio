import { useEffect, useRef } from "react"
import { useChatHistory } from "../hooks"

export const History = () => {
  const { data: history = [], isError, isLoading } = useChatHistory()
  
  const slideToLastMessage = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    slideToLastMessage.current?.scrollIntoView({ behavior: 'smooth' })
  },[history])

  if (isLoading) {
    return (
      <div className="mt-10 px-3 text-white text-center">
        <p className="text-neutral-400">Loading chat history...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mt-10 px-3 text-white text-center">
        <p className="text-red-400">Failed to load chat history. Please try again later.</p>
      </div>
    )
  }

  if (!history.length) {
    return (
      <div className="mt-10 px-3 text-white text-center">
        <p className="text-neutral-400">No messages yet. Start the conversation!</p>
      </div>
    )
  }

  return (
    <div className="mt-10 px-3 min-h-fit text-white space-y-5">
        {history.map((chat: any, index: number) =>(
          <div key={index} className={`flex flex-col text-2xl ${chat.type === 'human' ? 'justify-end' : ''} `}>
              <p className={`text-2xl mt-3 ${chat.type === 'human' ? 'text-end' : ''} `}>
                <span className={`p-3 rounded-3xl ${chat.type === 'human' ? 'bg-neutral-500' : ''}`}>{chat.content}</span>
              </p>
          </div>
        ))}
        <div ref={slideToLastMessage}/>
    </div>
  )
}
