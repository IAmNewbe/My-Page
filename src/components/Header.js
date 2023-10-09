import { useEffect, useState } from "react";

const Header = () => {
	const [stateClass, setStateClass] = useState(false);

  const toggle = () => {
    setStateClass(!stateClass);
    console.log(stateClass);
	}

	const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	console.log(isNavbarFixed);
	return (
		<>
			<header className="bg-transparent navbar-fixed top-0 left-0 w-full flex items-center z-10 " >
			<div className={"container " }>
				
				<div className="flex items-center justify-between relative">
					<div className="px-4">
						<a href="#home" className="font-bold text-tersier-0 text-lg block py-6">Home</a>

					</div>
					<div className={ "flex items-center px-4 " } onClick={toggle}>
						<button id="hamburger" 
							name="hamburger" 
							className={
								"block absolute right-4 lg:hidden " + 
								(stateClass ? "hamburger-active" : "")
								}>
							<span className="hamburger-line transition duration-700 origin-top-left"></span>
							<span className="hamburger-line transition duration-700"></span>
							<span className="hamburger-line transition duration-700 origin-bottom-left"></span>
						</button>

							<nav id="nav-menu" 
							className={
								"hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none " + 
								(!stateClass ? "hidden" : "nav-menu")
								}>
								<ul className="block lg:flex lg:font-semibold ">
									<li className="group">
										<a href="#home" className="text-base text-primary-0 py-2 mx-8 flex group-hover:text-tersier-0">Home</a>
									</li>
									<li className="group">
										<a href="#about" className="text-base text-primary-0 py-2 mx-8 flex group-hover:text-tersier-0">About</a>
									</li>
									<li className="group">
										<a href="#portofolio" className="text-base text-primary-0 py-2 mx-8 flex group-hover:text-tersier-0">Portofolio</a>
									</li>
									<li className="group">
										<a href="#skill" className="text-base text-primary-0 py-2 mx-8 flex group-hover:text-tersier-0">Skills</a>
									</li>
									<li className="group">
										<a href="#contact" className="text-base text-primary-0 py-2 mx-8 flex group-hover:text-tersier-0">Contact</a>
									</li>
		
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;