import { Skeleton } from "@/components/ui/skeleton"

export const PreviewSkeleton = () => {
  return (
    <section className="w-full h-full p-3 space-y-10">
      <div className="space-y-5">
        <Skeleton className="h-10 w-100 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-10 w-60 bg-white/20 rounded-2xl"/>
      </div>

      <div className="space-y-6">
        <Skeleton className="h-8 w-40 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-280 bg-white/20 rounded-2xl"/>
      </div>

      <div className="space-y-6">
        <Skeleton className="h-8 w-40 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-300 bg-white/20 rounded-2xl"/>
        <Skeleton className="h-5 w-280 bg-white/20 rounded-2xl"/>
      </div>
    </section>
  )
}
