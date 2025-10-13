import { ReadMeViewer } from "@/components/ReadMeViewer"
import { useBlog } from "@/features/blog/hooks"

const BlogPage = () => {

  const { data: blog, isError, isLoading } = useBlog()
  const automatedBlog = blog?.data.history[1].content;
  return (
    <div>
      <h1>BlogPage</h1>
      <ReadMeViewer readMe={automatedBlog}/>
    </div>
  )
}

export default BlogPage