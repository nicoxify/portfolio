import { useEffect, useState } from "react"

const Scroller = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset < 50) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <>
      {visible && (
        <div className="absolute bottom-0 border-2 border-gray-200 h-[55px] w-7 rounded-full mb-5 opacity-50">
          <div className="absolute left-2 top-2 h-2 w-2 bg-gray-200 rounded-full animate-mouse"></div>
        </div>
      )}
    </>
  )
}

export default Scroller
