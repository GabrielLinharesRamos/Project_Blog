'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function InstallInstructions({code}) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-3 md:p-4 text-xs md:text-sm overflow-x-auto shadow-md border border-gray-700">
      <SyntaxHighlighter 
        language="bash" 
        style={oneDark} 
        showLineNumbers 
        customStyle={{
          fontSize: '0.8rem',
          '@media (min-width: 768px)': {
            fontSize: '0.9rem'
          }
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
