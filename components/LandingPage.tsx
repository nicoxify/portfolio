import { useState, useEffect } from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Scroller from "./Scroller"

const LandingPage = () => {
  const [greeting, setGreeting] = useState("Hi")
  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting((prevGreet) => {
        let newGreet = ""
        switch (prevGreet) {
          case "Hi":
            newGreet = "你好"
            break
          case "你好":
            newGreet = "Hallo"
            break
          case "Hallo":
            newGreet = "สวัสดีครับ"
            break
          case "สวัสดีครับ":
            newGreet = "Hola"
            break
          case "Hola":
            newGreet = "こんにちは"
            break
          case "こんにちは":
            newGreet = "Hi"
            break
          default:
            newGreet = "Hi"
        }
        return newGreet
      })
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="h-screen relative flex items-center justify-center">
      <div className="text-center tracking-[.25em]">
        <p>{greeting}.</p>
        <h2 className="text-4xl text-blue-light font-bold my-5">
          I&apos;m Nico,
        </h2>
        <p>a full stack developer.</p>
        <div className="flex justify-center text-5xl">
          <a
            className="m-5 mr-0 hover:opacity-50 duration-300"
            href="https://github.com/NicoLindenau"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="m-5 hover:opacity-50 duration-300"
            href="https://www.linkedin.com/in/nico-lindenau-187759214/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <Scroller />
    </div>
  )
}

export default LandingPage
