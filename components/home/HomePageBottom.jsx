import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Gladiator",
    year: "2004",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/movie/avatar.jpg",
  },
  {
    name: "Spider-man",
    username: "2010",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/movie/spider-man.jpg",
  },
  {
    name: "Gladiator",
    username: "2002",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/movie/gladiator.jpg",
  },
];

const firstRow = reviews.slice(reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p",
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
        Moodvies is also coming soon to your phone!
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
            Our mobile app is currently in development and will be available
            soon on both Google Play and the App Store.
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
