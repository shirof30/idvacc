export default function Home() {
  return (
    <div id="home" className="relative overflow-hidden bg-center bg-cover bg-hero-image bg-no-repeat h-screen">
      <div className="pb-96 pt-[140px] md:pt-[140px] lg:pt-[170px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s">
                <h1 className="mb-9 text-4xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">VATSIM Indonesia</h1>
                <p className="mx-auto mb-11 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                  The official vACC of Indonesia
                  {/* providing air traffic control services across the Indonesian FIR. Covering major airports including Soekarno-Hatta, Ngurah Rai, and Juanda. Experience the warmth and hospitality of Indonesian
                  aviation. */}
                </p>
                <ul className="flex flex-wrap items-center justify-center">
                  {/* <li>
                    <a
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center transition duration-300 ease-in-out bg-white rounded-lg text-dark hover:text-primary hover:shadow-lg sm:px-10"
                      href="/about"
                    >
                      About== Us
                    </a>
                  </li> */}
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="flex items-center px-6 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:text-white hover:opacity-70 sm:px-10">
                      Join Us
                      <span className="pl-2">
                        <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
                          <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
