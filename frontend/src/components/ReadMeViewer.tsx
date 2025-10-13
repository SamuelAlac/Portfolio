import ReactMarkdown  from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export const ReadMeViewer = ({ readMe }: { readMe: string }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            { readMe }
        </ReactMarkdown>
    </div>
  )
}
