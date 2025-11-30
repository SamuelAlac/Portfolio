const NotFoundPage = () => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-6xl lg:text-8xl text-[#CBACF9] font-bold">404</h1>
        <h2 className="text-2xl lg:text-3xl font-semibold">PAGE NOT FOUND</h2>
        <p className="text-[10px] lg:text-xl">The page you are looking for may have been moved or no longer exists.</p>

        <div className="p-2 text-sm lg:text-xl bg-white/10 hover:text-[#CBACF9] mt-3 
    transition ease-in-out hover:scale-105 shadow-[-1px_1px_5px_#CBACF9] hover:shadow-[-1px_1px_10px_#CBACF9]">
            <button>BACK TO HOME</button>
        </div>
    </div>
  )
}

export default NotFoundPage