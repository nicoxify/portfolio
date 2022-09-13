import type { NextPage } from "next"
import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import LandingPage from "../components/LandingPage"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import TopArrow from "../components/TopArrow"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nico Lindenau</title>
        <meta name="description" content="Portfolio of Nico Lindenau" />
        <link rel="icon" href="/" />
      </Head>
      <TopArrow />
      <Navbar />
      <div className="px-3 md:px-10 bg-gray-dark">
        <LandingPage />
      </div>
      <div id="about" className="px-3 md:px-10 bg-blue-light">
        <About />
      </div>
      <div id="projects" className="px-3 md:px-10 bg-gray-dark">
        <Projects />
      </div>
      <div id="contact" className="px-3 md:px-10 bg-blue-light">
        <Contact />
      </div>
      <div className="px-3 md:px-10 bg-gray-dark">
        <Footer />
      </div>
    </>
  )
}
export default Home
