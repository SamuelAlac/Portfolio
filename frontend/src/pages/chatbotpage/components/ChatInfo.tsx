export const ChatInfo = () => {
  return (
    <section className="w-full min-h-165 flex flex-col justify-between">
      <div className="p-2 flex flex-col">
        <h1 className="text-3xl font-bold text-center">AI Chatbot</h1>
        <div className="mt-10 px-3 text-white">
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </div>
      
      <div className="p-5 mb-5">
        <div className="border-2 border-neutral-50 h-20 rounded-2xl px-3">
          <input className="w-full h-full text-2xl text-white outline-0" type="text" />
        </div>
      </div>
    </section>
  )
}
