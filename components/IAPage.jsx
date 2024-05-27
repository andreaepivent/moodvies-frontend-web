import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import parrain from "../public/movie/le-parrain.jpeg";
import { BorderBeam } from "./ui/border-beam";
import { useDispatch, useSelector } from "react-redux";
import { updateRecommendation } from "@/reducers/recommendations";

export default function IAPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [rec, setRec] = useState(false);
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [conversationHistory, setConversationHistory] = useState([]);
  const tokenTest = "7uxE57OsyHo8DvMgl3TSAqD5HHNlktvd";

  const questions = [
    {
      question:
        "Salut, je m'appelle Maud, j'ai été configurée pour t'aider à trouver un film. Quel genre de films souhaites-tu regarder aujourd'hui ?",
      options: [
        "Action",
        "Aventure",
        "Animation",
        "Comédie",
        "Crime",
        "Documentaire",
        "Drame",
        "Famille",
        "Fantaisie",
        "Histoire",
        "Horreur",
        "Musique",
        "Romance",
        "Science-fiction",
        "Thriller",
        "Guerre",
        "Western",
        "Indifférent",
      ],
    },
    {
      question: "Parfait, et tu voudrais regarder un film de quelle nationalité ?",
      options: [
        "Américain",
        "Français",
        "Anglais",
        "Japonais",
        "Coréen",
        "Italien",
        "Espagnol",
        "Autres",
        "Indifférent",
      ],
    },
    {question: "Une préférence pour la période ?",
      options:["Plutôt vieux (avant les années 60)",
        "Années 60 à 2000",
        "Moderne (2000 à 2020)",
        "2020 à aujourd'hui"
      ]
    },
    {
      question: "Combien de temps as-tu devant toi ?",
      options: [
        "Court (moins d'1h30)",
        "Moyen (entre 1h30 et 2h)",
        "J'ai du temps (plus de 2h)",
        "Indifférent",
      ],
    },
    {
      question: "Pour finir, tu cherches un film populaire ou plutôt de niche ?",
      options: ["Populaire", "Niche", "Indifférent"],
    },
  ];

  const handleAnswer = (answer) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (step < questions.length) {
      setStep(step + 1);
      setAnswers({ ...answers, [step]: answer });
      setConversationHistory([
        ...conversationHistory,
        { type: "question", text: questions[step].question, time: currentTime },
        { type: "answer", text: answer, time: currentTime },
      ]);
    }
    if (step === questions.length - 1) {
      // On récupère les préférences
      const preferences = {
        genre: answers[0],
        country: answers[1],
        release_year:answers[2],
        time: answers[3],
        popularity: answer,
      };
      fetchRecommendation(tokenTest, preferences);
    }
  };

  const fetchRecommendation = (token, preferences) => {
    fetch("http://localhost:3000/recommendation/customRec", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        preferences,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Si on réussit à trouver un film, on le signale et on l'envoie au reducer
        if (data.recommendations && data.recommendations.length > 0) {
          dispatch(updateRecommendation(data.recommendations));
          setValidate(true);
          setConversationHistory((prev) => [
            ...prev,
            {
              type: "question",
              text: "Super, appuie sur valider pour voir mes recommandations de films.",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        } else {
          setConversationHistory((prev) => [
            ...prev,
            {
              type: "question",
              text: "Désolé, je n'ai trouvé aucun film correspondant à tes critères. Tu peux recommencer le questionnaire en cliquant ici.",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      });
  };

  function handleClick() {
    router.push(`/movies`);
  }

  return (
    <>
      <div className="relative w-screen h-screen flex flex-col bg-center">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(/movie/le-parrain.jpeg)`,
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-center gap-5 my-auto mx-32 z-10 pt-20 inset-0">
          <div>
            <h3 className="text-slate-100 font-extrabold text-3xl text-center mb-6 mt-36">
              Tell us about your mood
            </h3>
            <p className="text-slate-100 text-center mb-6">
              Our AI Maud is here to help you find the perfect movie that
              matches your current mood
            </p>
          </div>

          <div className="relative rounded-xl first-letter:mx-auto h-full text-slate-100 w-full md:w-3/4 lg:w-4/5">
            <BorderBeam />
            <div className="rounded-xl m-10 bg-zinc-900 py-16 overflow-y-auto max-h-[70vh]">
              {conversationHistory.map((entry, index) => (
                <div
                  className={`flex flex-col flex-wrap ${
                    entry.type === "question"
                      ? "items-start text-left"
                      : "items-end text-right"
                  } ml-16 mr-16`}
                  key={index}
                >
                  <p className="mb-4">
                    {entry.type === "question" ? "Maud" : "Paul"} - {entry.time}
                  </p>
                  <p
                    className={`rounded-lg bg-gray-800 px-10 py-2 ${
                      entry.type === "question" ? "w-1/2" : "w-1/3"
                    } mb-4`}
                  >
                    {entry.text}
                  </p>
                </div>
              ))}

              {step < questions.length && (
                <div className="flex flex-col justify-start ml-16">
                  <p className="mb-4">
                    Maud -{" "}
                    {new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="rounded-lg bg-gray-800 px-10 py-2 w-1/2 mb-4">
                    {questions[step].question}
                  </p>
                </div>
              )}

              <div className="flex justify-end flex-wrap mr-16">
                {step < questions.length &&
                  questions[step].options.map((option, index) => (
                    <button
                      className="bg-gray-600 rounded-xl px-4 py-1 ml-2 mb-4"
                      key={index}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            {validate && (
              <Button
                variant="gradientPurple"
                className="w-96"
                onClick={handleClick}
              >
                Submit
              </Button>
            )}
          </div>
        </div>

        <div
          className="w-full h-full absolute bg-black"
          style={{ zIndex: 1, top: "95vh" }}
        ></div>
        <div className="mt-16 z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
