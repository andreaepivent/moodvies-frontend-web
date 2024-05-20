import React from 'react';

const HomePage = () => {
  return (
  <div className="w-screen h-screen flex">
      <div class="flex flex-col ">  
        <img className="h-32 w-32 p-6 " src="logo-moodvie-letter.png" alt="logo-moodvie-letter"/>
        <h1 className="object-center text-6xl font-bold"> FIND YOUR FAVORITE MOVIE FOR TONIGHT </h1>
        <p>Sélectionnez des films et séries en fonction de votre humeur.</p>
      </div>
     
    <div className="w-screen flex bg-indogo-500">
      <div className="justify-center">
                    //Bouton Login
              <button class="box-border flex flex-row justify-center items-center p-[6px] px-[8px] gap-[8px] absolute w-[170px] h-[50px] left-[750px] top-[400px] rounded-[8px] bg-[blue]" onClick={()=>document.getElementById('my_modal_login').showModal()}>Login</button>
              <dialog id="my_modal_login" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Login to your account!</h3>
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <label className="input input-bordered flex items-center gap-2">
                      Email
                      <input defaultValue="" type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      <input defaultValue="" type="password" className="grow" value="password" />
                    </label>
                    <button className="btn" onClick={()=>document.getElementById('my_modal_login').showModal()}>Login</button>
                  </form>
                </div>
              </dialog>

                  //Bouton Join us
              <button class="box-border flex flex-row justify-center items-center p-[6px] px-[8px] gap-[8px] absolute w-[170px] h-[50px] left-[500px] top-[400px] rounded-[8px] bg-[blue]" onClick={()=>document.getElementById('my_modal_Create').showModal()}>Join us</button>
              <dialog id="my_modal_Create" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
              </dialog>

              <a href="#bottom">↓</a>
                <div id="bottom"></div>
      </div>
     </div>
  </div>
  );
};

export default HomePage;