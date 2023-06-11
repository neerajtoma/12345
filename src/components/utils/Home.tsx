import Link from "next/link"
import React, {useEffect, useState} from "react"

import LZIcon from "@/components/icon/LZIcon"
import ArrowUpRightIcon from "@/components/icon/ArrowUpRightIcon"
import ChevronDownIcon from "@/components/icon/ChevronDownIcon"

const textList: string[] = [
  "Let's go",
  "Let's design",
  "Let's build",
  "Let's discover",
  "Let's explore",
  "Let's innovate",
  "Let's chit-chat",
  "Let's brainstorm",
]

function Home() {
  const [colorIndex, setColorIndex] = useState<number>(0)
  const [textIndex, setTextIndex] = useState<number>(0)
  const [animationStep, setAnimationStep] = useState<'text' | 'circle'>('circle')

  useEffect(() => {
    // 显示第一条信息
    setTextIndex((prevState: number) => (prevState + 1) % 7)
    setAnimationStep('text')

    const interval: NodeJS.Timer = setInterval(() => {
      setAnimationStep('circle')
      setColorIndex((prevState: number) => (prevState + 1) % 7)

      const timeout = setTimeout(() => {
        setTextIndex((prevState: number) => (prevState + 1) % 7)
        setAnimationStep('text')
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`h-screen flex flex-col justify-between items-center
          bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex}`}
    >

      {/* Navbar */}
      <div className={'w-full flex flex-row p-6 text-lg'}>
        <LZIcon width={60} height={60} className={`-mt-4`} />
        <p className={'w-1/5 text-xl p-1 flex flex-row items-center'}>Lesenelir AI Base</p>
        <div className={'w-full flex flex-row justify-between '}>
          <ul className={'flex flex-row gap-8'}>
            <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
              Research
              <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
            </li>
            <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
              Product
              <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
            </li>
            <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
              Developers
              <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
            </li>
            <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
              Safety
            </li>
          </ul>
          <ul className={'flex flex-row gap-8'}>
            <li className={'p-1 flex flex-row items-center hover:underline underline-offset-4 cursor-pointer'}>
              Search
            </li>
            <li className={'p-1 flex flex-row items-center hover:underline underline-offset-4 cursor-pointer'}>
              Log in <ArrowUpRightIcon width={20} height={20} className={'mt-1'}/>
            </li>
            <li className={'border p-1 flex flex-row items-center hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer'}>
              Sign in <ArrowUpRightIcon width={20} height={20} className={'mt-1'}/>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className={'flex-1 flex flex-col justify-center items-center'}>
        <div className={'flex flex-row'}>
          <h2 className={`text-lg p-2 ${animationStep === 'text' ? 'animate-slidein' : 'hidden'}`}>
            {textList[textIndex]}
          </h2>
          <div className={`w-10 h-10 rounded-full bg-canvas-t-${colorIndex}`}></div>
        </div>
        <ul className={'list-none flex flex-row gap-2 m-6'}>
          <li className={`p-2 rounded-lg border bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex} 
            hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer`}
          >
            <Link href={'/chat'}>ChatGPT</Link>
          </li>
          <li className={`p-2 rounded-lg border bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex} 
            hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer`}
          >
            <Link href={'/dall'}>DALL-E</Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className={'flex flex-col self-start m-10'}>
        <p>
          <span className={'text-lg'}> Lesenelir AI Base: </span>
          <span className={'text-base'}>
            A collection of art and code works about AI, inspired by OpenAI.
          </span>
        </p>
        <p>
          This project includes: chatGPT and DALL-E.
        </p>
      </div>

    </div>
  )
}

export default Home
