export const Education = () => {
  return (
    <section className="relative w-full min-h-80 !bg-[url('/BulacanStateUniversityMobile.webp')] 
      md:!bg-[url('/BulacanStateUniversity.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative p-3 space-y-1.5 text-white">
        <h1 className="text-lg md:text-3xl font-bold">Education</h1>
        <h1 className="text-lg md:text-2xl font-semibold">
          Bachelor of Science in Information Technology
        </h1>
        <h2 className="text-md md:text-lg">
          Bulacan State University, Malolos, Bulacan (2022 - 2026)
        </h2>
      </div>
    </section>
  )
}
