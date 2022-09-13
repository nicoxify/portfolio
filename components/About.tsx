import Image from "next/image"
import man from "../public/man.png"
import bulb from "../public/bulb.png"

const About = () => {
  return (
    <div className="h-screen sm:h-max flex sm:block flex-col justify-around text-center sm:text-left">
      <div className="sm:flex justify-start">
        <div className="sm:flex items-center justify-between py-10 sm:w-1/2">
          <div className="hidden sm:block">
            <Image src={man} alt="man" />
          </div>
          <div>
            <h2 className="text-4xl mb-10">That&apos;s me</h2>
            <h4 className="text-xl">
              A motivated guy from Germany. I have a passion for sport and like
              to improve myself continuously.
            </h4>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-end">
        <div className="sm:flex items-center justify-between pb-10 sm:w-1/2">
          <div>
            <h2 className="text-4xl mb-10">My goal</h2>
            <h4 className="text-xl">
              Keep things simple while still conveying the full message.
            </h4>
          </div>
          <div className="hidden sm:block">
            <Image className="scale-75 hidden" src={bulb} alt="bulb" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
