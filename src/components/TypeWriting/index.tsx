import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface MyComponentProps {
  words: string[];
}

export function TypeWriting({ words }: MyComponentProps) {
  return (
    <div className='text-lg font-mono'>
      <Typewriter
        words={words}
        loop={1}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}