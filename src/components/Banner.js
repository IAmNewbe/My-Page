import banner from '../../src/Assets/img/banner.jpg'

const Banner = () => {
  return (
    <> 
      <section id="home" className="pt-24 text-primary-0">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold md:text-xl ">Hello👋, My Name Is 
                <span className="block font-bold text-4xl text-tersier-0 mt-1 ">Ahmad Ahlul Hikam</span></h1>
              <h2 className="font-medium text-lg mb-5 lg:2xl ">Undergraduate Electrical Engineering | <span className="text-slate-600 ">Coders</span></h2>

              <p className="font-medium text-slate-600 mb-10 leading-relaxed">"Architecting Next-Level Solutions with Mastering the Convergence of Software and Electrical Engineering for a Connected World"</p>
              <a className="font-semibold text-base text-white bg-slate-700 py-3 px-8 rounded-full hover:shadow-lg hover:bg-slate-500 cursor-pointer " href="#about">
                  Contact Person
              </a>
            </div>
            <div className="w-full px-4 self-end lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0 rounded-xl overflow-hidden">
                <div style={{backgroundImage: `url(${banner})`}}
                className="w-full h-64 lg:h-80 mx-auto bg-cover bg-no-repeat lg:bg-right object-cover bg-fixed"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;