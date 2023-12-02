import heroSVG from '../public/hero.svg'

export function App() {
  return (
    <div className="h-screen w-screen py-12 text-black relative overflow-hidden">
      <div>
        <div className="w-[633px] h-[874px] bg-gradient-to-b from-green-400 to-white absolute rotate-45 top-[-10rem] right-[-1rem] opacity-75 max-sm:h-screen max-sm:w-screen max-sm:rotate-0 max-sm:top-0 max-sm:left-0" />

        <div className="w-[123px] h-[123px] rounded-full bg-gradient-to-l from-green-300 to-white absolute top-12 left-2/4 opacity-75" />

        <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-l from-green-300 to-white absolute bottom-44 left-44 opacity-90" />

        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-l from-green-300 to-white absolute bottom-56 right-2/4 opacity-75" />

        <h1 className="text-9xl font-bold absolute left-1/2 -translate-x-1/2 bottom-[-1.75rem] opacity-10 max-xl:text-8xl max-md:text-7xl max-md:w-96 max-sm:rotate-90 max-sm:text-7xl max-sm:left-6 max-sm:bottom-1/4 max-sm:opacity-10 max-sm:w-96">
          RE-TECH
        </h1>
      </div>

      <div className="absolute flex justify-evenly items-center w-full h-full max-sm:flex-col max-sm:justify-center max-sm:gap-5">
        <div className="flex flex-col w-1/2 gap-10 items-start max-sm:gap-5">
          <h1 className="text-5xl max-sm:text-lg font-bold leading-10 text-[#095073]">
            Projeto Re-Tech 🚀
          </h1>
          <p className="text-lg max-sm:text-sm leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            aliquid voluptatibus dicta maiores doloribus inventore, nam
            recusandae sint repudiandae quia quo aspernatur labore ratione!
            Voluptatem mollitia enim natus ea sed.
          </p>
          <button className="self-center bg-gradient-to-l from-sky-900 to-green-700 shadow-lg shadow-green-500/50 px-16 py-4 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl hover:from-sky-800 hover:to-green-600 transition-colors focus:ring-4 focus:ring-sky-300 max-sm:px-10 max-sm:py-2 max-sm:text-lg">
            DOAR
          </button>
        </div>
        <img className="w-96 max-sm:w-52" src={heroSVG} alt="computer" />
      </div>
    </div>
  )
}
