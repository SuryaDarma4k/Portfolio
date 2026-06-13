const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 
    md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">
            Portfolio
        </h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
        </div>
        <div className="flex items-center gap-5">
            <a href="https://github.com/SuryaDarma4k">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            {/* <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/harelsuryadarma/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://wa.me/6285765932825">
                <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer