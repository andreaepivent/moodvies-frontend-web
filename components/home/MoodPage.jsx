import LanguageSelect from "../common/LanguageSelect";

export default function MoodPage() {
  const moods = ["Happy", "Chill", "Sad", "Angry", "Horny"];

  return (
    <div
      className="w-screen h-screen  bg-center"
      style={{ backgroundImage: "url(/movie/blade-runner.jpeg)" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <img
            src="/logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20"
          />
          <p className="text-slate-100 font-bold">
            Find your favorite movie for tonight
          </p>
        </div>
        <div>
          <p className="text-slate-100 font-bold">
            Choose to be guided by our AI
          </p>
        </div>
        <div className="flex gap-2">
          <LanguageSelect />
          <img src="/logo/user.svg" alt="logo-user" className="size-8" />
        </div>
      </div>
    </div>
  );
}
