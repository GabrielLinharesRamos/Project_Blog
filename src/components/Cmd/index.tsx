'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function InstallInstructions({code}) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-4 text-sm overflow-x-auto shadow-md">
      <SyntaxHighlighter language="bash" style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
