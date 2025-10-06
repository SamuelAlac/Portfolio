import { useEffect, useRef } from "react"
import { useChatHistory } from "../hooks"
import { BsRobot } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";

export const History = () => {
  const { data: history = [], isError, isLoading } = useChatHistory()
  
  const slideToLastMessage = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    slideToLastMessage.current?.scrollIntoView({ behavior: 'smooth' })
  },[history])

  return (
    <div className="mt-10 px-3 text-white space-y-5">
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
