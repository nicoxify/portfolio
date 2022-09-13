const Navbar = () => {
  return (
    <div className="absolute flex justify-between sm:w-1/2 left-1/2 -translate-x-1/2 z-10">
      <a href="#about" className="hover:opacity-50 duration-300 p-2 sm:p-5">
        About
      </a>
      <a href="#projects" className="hover:opacity-50 duration-300 p-2 sm:p-5">
        Projects
      </a>
      <a href="#contact" className="hover:opacity-50 duration-300 p-2 sm:p-5">
        Contact
      </a>
    </div>
  )
}

export default Navbar
