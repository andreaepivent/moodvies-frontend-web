import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <Card className="w-screen bg-black text-slate-300 rounded-none">
      <footer class="mt-auto">
        <div class="max-w-xl mx-auto p-4 grid grid-cols-2 lg:max-w-7xl lg:grid-cols-6 md:py-10">
          <div class="m-2">
            <img
              src="/Logo-moodvie-letter.svg"
              alt="logo-moodvies"
              className="size-12"
            />
            <p className="text-slate-300 my-2 text-sm sm:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              nostrum.
            </p>
          </div>
          <div class="m-3 md:m-3">
            <h5 class="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Company
            </h5>
            <ul className="text-slate-300 my-2 text-sm sm:text-md">
              <li class="my-2">Moodvies</li>
              <li class="my-2">Paris, France</li>
              <li class="my-2 hover:underline cursor-pointer">
                01 01 01 01 01
              </li>
              <li class="my-2 hover:underline cursor-pointer">
                contact@moodvies.com
              </li>
            </ul>
          </div>
          <div class="m-3 md:m-3">
            <h5 class="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Quick Links
            </h5>
            <ul className="my-2 text-slate-300 text-sm sm:text-md">
              <li className="my-2">
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Sign-up
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Sign-in
                </a>
              </li>
            </ul>
          </div>

          <div class="m-3 md:m-3">
            <h5 class="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Social Media
            </h5>
            <ul>
              <li class="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/facebook.svg"
                  className="size-3"
                  alt="logo-facebook"
                />
                <a href="#">Facebook</a>
              </li>

              <li class="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/twitter.svg"
                  className="size-3"
                  alt="logo-twitter"
                />
                <a href="#">Twitter</a>
              </li>
              <li class="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/youtube.svg"
                  className="size-3"
                  alt="logo-youtube"
                />
                <a href="#">Youtube</a>
              </li>
              <li class="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/instagram.svg"
                  className="size-3"
                  alt="logo-instagram"
                />
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 mt-5 md:m-5">
            <h3 class="mb-5 font-semibold text-slate-100 tracking-wider text-sm sm:text-lg">
              Subscribe to our newsletter
            </h3>
            <form className="flex items-center">
              <Input
                placeholder="Enter your email"
                className="dark text-slate-300 rounded-3xl focus-visible:ring-offset-none bg-black "
              ></Input>
              <Button
                variant="subscribe"
                className="text-slate-100 rounded-3xl h-11 w-40 -ml-24"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </Card>
  );
}
