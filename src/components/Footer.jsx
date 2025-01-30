
function Footer() {
  return (
    <footer className=" bg-black px-12  z-10 py-10 text-white">
        <div className="flex flex-col md:flex-row  items-center md:justify-between text-white">
            <div>
                <h2 className=" text-2xl md:text-4xl w-[300px] " >Start Your Crypto Journey Now! </h2>
                <button
            href="#"
            className="text-white focus:outline-none mt-5  bg-slate-600 px-4 py-2 rounded-full "
          >
            Start Now
          </button>
            </div>

            <div>

            <ul className='text-white text-xl hidden md:flex flex-col md:flex-row  justify-between '>
                <li>Home</li>
                <li>About</li>
                <li>Vision</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>


            </div>
        </div>
        <div className=" bg-slate-600 rounded-3xl w-full my-10 md:my-20  flex items-center justify-center">
                <h1 className="text-center text-[3rem]  md:text-[15rem] ">CRYPTICHO</h1>
            </div>

            <div className="text-center text-gray-400 flex items-end  justify-center">All rights reserved. Made By Eng: OSAMA</div>
    </footer>
  )
}

export default Footer