import { Blogs } from "./components/Blogs"

const BlogPage = () => {
  return (
    <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <Blogs/>
     </div>

     <div className="space-y-5">
      
     </div>
    </div>
  )
}

export default BlogPage