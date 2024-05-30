import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Marie L.",
    year: "⭐⭐⭐⭐⭐",
    body: "Moodvies a transformé mes soirées cinéma ! J'adore comment ils peuvent recommander des films en fonction de mon humeur du moment. C'est comme si l'application me comprenait parfaitement.",
    img: "/profile-pic/profile1.jpeg",
  },
  {
    name: "Julien D.",
    username: "⭐⭐⭐⭐⭐",
    body: "Incroyable ! Moodvies est devenu mon compagnon de visionnage préféré. J'ai découvert des films fantastiques que je n'aurais jamais trouvés autrement.",
    img: "/profile-pic/profile2.jpeg",
  },
  {
    name: "Claire V.",
    username: "⭐⭐⭐⭐⭐",
    body: "Je suis absolument ravie de Moodvies ! Le concept de choisir des films en fonction de son humeur est génial. J'ai découvert tant de films fantastiques et variés grâce à eux.",
    img: "/profile-pic/profile3.jpeg",
  },
  {
    name: "Paul D.",
    username: "⭐⭐⭐⭐⭐",
    body: "Une application fantastique pour les amateurs de cinéma ! Moodvies propose toujours des films qui correspondent parfaitement à mon humeur.",
    img: "/profile-pic/profile2.avif",
  },
];

const firstRow = reviews.slice(0,2);
const secondRow = reviews.slice(2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-50 w-36 cursor-pointer overflow-hidden rounded-xl border p",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 text-slate-100">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const HomePageBottom = () => {
  return (
    <>
      <h1 className="mt-40 text-5xl font-bold text-slate-100 text-center">
      Moodvies sera bientôt disponible <br /> sur votre téléphone !
      </h1>
      <div className="flex justify-around mt-20 mb-40">
        <div className="hidden px-8 relative max-w-60 h-96 flex-row items-center justify-center overflow-hidden rounded-lg  bg-transparent md:shadow-xl lg:flex">
          <div className="flex-1 text-slate-100">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="max-w-2xl flex flex-col items-center justify-center text-center">
          <p className="mt-10 text-xl text-white">
          Notre application mobile est en cours de développement et sera bientôt disponible sur Google Play et l'App Store.
          </p>
          <div className="flex justify-center mt-10">
            <Image
              className="w-44 h-14 mr-6 cursor-pointer"
              src="/home/GoooglePlay.png"
              alt="logo-GooglePlay"
              width={176}
              height={56}
            />
            <Image
              className="w-48 h-16 cursor-pointer"
              src="/home/App-Store.png"
              alt="logo-App-Store"
              width={192}
              height={64}
            />
          </div>
        </div>

        <div className="hidden px-8 relative max-w-60 h-96 flex-row items-center justify-center overflow-hidden rounded-lg  bg-transparent md:shadow-xl lg:flex">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] text-slate-100"
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default HomePageBottom;
