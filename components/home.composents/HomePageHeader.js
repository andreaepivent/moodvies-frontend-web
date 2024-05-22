import React from "react";

function HomePageHeader() {
  return (
    <div class="w-screen bg-[black]">
      <div class="">
        <video class="" autoPlay loop muted>
          <source src="MATRIX4.mp4" />
        </video>

        <div class="flex h-screen z-0 justify-center items-center bg-[black] z-10">
          <img
            class="flex place-self-start absolute left-5 top-6 w-20 h-21 "
            src="logo-moodvie-letter.png"
            alt="logo-moodvie-letter"
          />

          <div className=" flex flex-col z-10">
            <div className="basis-full flex items-center justify-center w-full bg-cover bg-center">
              <h1 className="flex text-center text-6xl font-bold text-white my-8 ">
                {" "}
                FIND YOUR FAVORITE MOVIE <br/> FOR TONIGHT{" "}
              </h1>
            </div>

            <div className="flex flex-row content-start">
              <div className="basis-1/4 grow text-center"></div>
              <div className="basis-1/4 grow text-right mr-5">
                <button class="box-border p-[6px] px-[8px] gap-[8px] w-[170px] h-[50px] rounded-[8px] border-2 bg-[#ffffff00] text-white" onclick="my_modal_3.showModal()">
                  Join us
                </button>
                <dialog id="my_modal_3" class="modal">
                  <div class="modal-box">
                    <form method="dialog">
                      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 class="font-bold text-lg">Hello!</h3>
                    <p class="py-4">
                      Press ESC key or click on ✕ button to close
                    </p>
                  </div>
                </dialog>
              </div>

              <div className="basis-1/4 grow text-left ml-5">
                <button
                  class="box-border p-[6px] px-[8px] gap-[8px] w-[170px] h-[50px] rounded-[8px] border-2 bg-[#ffffff00] text-white"
                  onClick={() =>
                    document.getElementById("my_modal_Create").showModal()
                  }
                >
                  Login
                </button>
              </div>
              <div className="basis-1/4 grow text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
