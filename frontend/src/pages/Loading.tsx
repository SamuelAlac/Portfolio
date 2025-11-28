import { ReactTyped } from "react-typed"

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold">{'<'}<ReactTyped strings={['Samuel']}
      typeSpeed={120} loop backSpeed={20} cursorChar="|" showCursor={true} />{'/>'}</h1>
    </div>
  )
}
