import { ReactTyped } from "react-typed"

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
      <h1 className="text-4xl text-[#CBACF9] font-bold">{'<'}<ReactTyped strings={['Samuel']}
      typeSpeed={120} loop backSpeed={20} cursorChar="|" showCursor={true} />{'/>'}</h1>
    </div>
  )
}
