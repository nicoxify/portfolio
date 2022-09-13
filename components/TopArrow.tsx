import { useEffect, useState } from "react"
import { BiArrowToTop } from "react-icons/bi"

const TopArrow = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer hover:opacity-50 duration-300"
        >
          <BiArrowToTop className="text-2xl animate-bounce" />
        </div>
      )}
    </>
  )
}

export default TopArrow
