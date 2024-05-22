export default function CarrousselMood() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-[400px] flex flex-nowrap justify-start">
        <input type="radio" name="slide" id="c1" className="hidden" />
        <label
          htmlFor="c1"
          className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
          style={{ backgroundImage: "url('/movie/spider-man.jpeg')" }}
        >
          <div className="flex flex-nowrap p-4">
            <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
              <h4 className="uppercase text-white">Spider Man</h4>
              <p className="text-slate-100 pt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                illum.
              </p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" className="hidden" />
        <label
          htmlFor="c2"
          className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
          style={{ backgroundImage: "url('/movie/star-wars.jpeg')" }}
        >
          <div className="flex flex-nowrap p-4">
            <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
              <h4 className="uppercase text-white">Star-Wars</h4>
              <p className="text-slate-100 pt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                illum.
              </p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" className="hidden" />
        <label
          htmlFor="c3"
          className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
          style={{ backgroundImage: "url('/movie/lordofthering.jpeg')" }}
        >
          <div className="flex flex-nowrap p-4">
            <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
              <h4 className="uppercase text-white">The lord of the ring</h4>
              <p className="text-slate-100 pt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                illum.
              </p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" className="hidden" />
        <label
          htmlFor="c4"
          className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
          style={{ backgroundImage: "url('/movie/gladiator.jpg')" }}
        >
          <div className="flex flex-nowrap p-4">
            <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
              <h4 className="uppercase text-white">Gladiator</h4>
              <p className="text-slate-100 pt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                illum.
              </p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
