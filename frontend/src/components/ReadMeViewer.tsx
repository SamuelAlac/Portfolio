import ReactMarkdown  from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const ReadMeViewer = ({ readMe }: { readMe: string }) => {
  return (
    <div className="prose max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            { readMe }
        </ReactMarkdown>
    </div>
  )
}
