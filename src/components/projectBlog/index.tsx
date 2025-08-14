'use client';

import { useEffect, useRef } from 'react';
import './ProjectBlog.css';

export function ProjectBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.getElementsByClassName('word') || [];
    const wordArray: HTMLElement[][] = [];
    let currentWord = 0;

    if (words.length === 0) return;

    const splitLetters = (wordEl: Element) => {
      const content = wordEl.textContent || '';
      wordEl.innerHTML = '';
      const letters: HTMLElement[] = [];
      for (let i = 0; i < content.length; i++) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        wordEl.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    };

    const animateLetterOut = (cw: HTMLElement[], i: number) => {
      setTimeout(() => {
        cw[i].className = 'letter out';
      }, i * 80);
    };

    const animateLetterIn = (nw: HTMLElement[], i: number) => {
      setTimeout(() => {
        nw[i].className = 'letter in';
      }, 340 + i * 80);
    };

    const changeWord = () => {
      const cw = wordArray[currentWord];
      const nextIndex = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
      const nw = wordArray[nextIndex];

      for (let i = 0; i < cw.length; i++) animateLetterOut(cw, i);

      // Hide current word after it's animated out
      setTimeout(() => {
        cw[0].parentElement!.style.opacity = '0';
      }, cw.length * 80 + 300);

      // Prepare next word and show it
      for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement!.style.opacity = '1';
        animateLetterIn(nw, i);
      }

      currentWord = nextIndex;
    };

    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    (words[currentWord] as HTMLElement).style.opacity = '1';
    const interval = setInterval(changeWord, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text relative p-2 md:p-4 overflow-hidden" ref={containerRef}>
      <p className="text-sm md:text-base lg:text-lg">Project where I talk about things like </p>
      <p className="min-h-[1.5em] md:min-h-[1.75em] relative">
        <span className="word green">Project</span>
        <span className="word wisteria">coding.</span>
        <span className="word belize">videogames.</span>
        <span className="word pomegranate">Stocks.</span>
      </p>
    </div>
  );
}
