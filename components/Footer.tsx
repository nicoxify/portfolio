import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <div>
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
      <h6 className="pb-5 opacity-50 text-xs text-center">
        © {new Date().getFullYear()} Nico Lindenau . All rights reserved.
      </h6>
    </div>
  )
}

export default Footer
