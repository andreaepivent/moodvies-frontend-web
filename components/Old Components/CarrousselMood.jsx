// export default function CarrousselMood() {
//   const movies = [
//     {
//       title: "Spider Man",
//       director: "Stan Lee",
//       duration: 150,
//       synopsis:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vitae dolorem pariatur officia dignissimos architecto.",
//       year: 2004,
//       background: "spider-man.jpeg",
//     },
//     {
//       title: "Star Wars",
//       director: "George Lucas",
//       duration: 184,
//       year: 1997,
//       synopsis:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vitae dolorem pariatur officia dignissimos architecto.",
//       background: "star-wars.jpeg",
//     },
//     {
//       title: "The Lord of the Ring",
//       director: "Peter Jackson",
//       duration: 240,
//       year: 2003,
//       synopsis:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vitae dolorem pariatur officia dignissimos architecto.",
//       background: "lord-of-the-ring.jpeg",
//     },
//     {
//       title: "Avatar",
//       director: "James Cameron",
//       duration: 164,
//       year: 2012,
//       synopsis:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vitae dolorem pariatur officia dignissimos architecto.",
//       background: "avatar.jpeg",
//     },
//   ];

//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="h-[400px] flex flex-nowrap justify-start">
//         {movies.map((movie, index) => (
//           <>
//             <input type="radio" name="slide" id={index} className="hidden" />
//             <label
//               htmlFor={index}
//               className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
//               style={{ backgroundImage: `url('/movie/${movie.background}')` }}
//             >
//               <div className="flex flex-nowrap p-4">
//                 <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
//                   <h4 className="uppercase text-white">{movie.title}</h4>
//                   <p className="text-slate-100 pt-1">{movie.synopsis}</p>
//                 </div>
//               </div>
//             </label>
//           </>
//         ))}

//         {/* <input type="radio" name="slide" id="c2" className="hidden" />
//         <label
//           htmlFor="c2"
//           className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
//           style={{ backgroundImage: "url('/movie/star-wars.jpeg')" }}
//         >
//           <div className="flex flex-nowrap p-4">
//             <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
//               <h4 className="uppercase text-white">Star-Wars</h4>
//               <p className="text-slate-100 pt-1">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//                 illum.
//               </p>
//             </div>
//           </div>
//         </label>

//         <input type="radio" name="slide" id="c3" className="hidden" />
//         <label
//           htmlFor="c3"
//           className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
//           style={{ backgroundImage: "url('/movie/lordofthering.jpeg')" }}
//         >
//           <div className="flex flex-nowrap p-4">
//             <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
//               <h4 className="uppercase text-white">The lord of the ring</h4>
//               <p className="text-slate-100 pt-1">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//                 illum.
//               </p>
//             </div>
//           </div>
//         </label>

//         <input type="radio" name="slide" id="c4" className="hidden" />
//         <label
//           htmlFor="c4"
//           className="group w-[180px] bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[600px]"
//           style={{ backgroundImage: "url('/movie/gladiator.jpg')" }}
//         >
//           <div className="flex flex-nowrap p-4">
//             <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
//               <h4 className="uppercase text-white">Gladiator</h4>
//               <p className="text-slate-100 pt-1">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//                 illum.
//               </p>
//             </div>
//           </div>
//         </label> */}
//       </div>
//     </div>
//   );
// }
