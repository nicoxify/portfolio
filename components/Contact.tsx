const Contact = () => {
  const mailLink = () => {
    window.location.href = "mailto:nilindenau@gmail.com"
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center sm:w-1/2">
        <h3 className="text-3xl font-bold">I can help.</h3>
        <h5 className="my-5 text-lg">
          If you have an idea that you want to get realized, think you need my
          help with something, then get in touch.
        </h5>
        <div className="flex justify-center">
          <div
            onClick={mailLink}
            className="bg-gray-dark p-3 rounded-lg text-xl hover:scale-110 duration-300 cursor-pointer"
          >
            Message me.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
