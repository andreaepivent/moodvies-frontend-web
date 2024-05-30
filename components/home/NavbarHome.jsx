// import { useRouter } from "next/router";
// import { useState } from "react";
// import { Setting } from "../common/Setting";
// import Notifications from "../common/Notifications";
// import { useDispatch, useSelector } from "react-redux";

// export default function NavbarHome() {
//   const [showModalSettings, setShowModalSettings] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   const user = useSelector((state) => state.user.value);

//   const router = useRouter();
//   function handleHome() {
//     router.push(`/mood`);
//   }

//   return (
//     <>
//       <div className="flex items-center justify-between pt-7 z-1 px-8 absolute top-0 left-0 w-full bg-transparent z-20">
//         <div className="flex flex-col justify-center items-center">
//           <img
//             src="/home/Logo-moodvie-letter.svg"
//             alt="logo-moodvie"
//             className="size-20 cursor-pointer"
//             onClick={() => handleHome()}
//           />
//         </div>
//         <div className="hidden  flex-col justify-center items-center mt-4  lg:flex"></div>
//         <div className="flex gap-4">
//           <div
//             className=" flex items-center cursor-pointer"
//             onClick={() => setShowModalSettings(!showModalSettings)}
//           >
//             <Setting />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
