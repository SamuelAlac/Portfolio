import { CodeBlock as Block } from 'react-code-block';

export const CodeBlock = ({ code, language }: { code: any, language: any }) => {
  return (
    <Block code={code} language={language}>
      <Block.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="table-row">
          <Block.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <Block.LineContent className="table-cell">
            <Block.Token/>
          </Block.LineContent>
        </div>
      </Block.Code>
    </Block>
  );
}