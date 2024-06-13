import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";
import { useDispatch, useSelector } from "react-redux";
import { updateRecommendation } from "@/reducers/recommendations";
import { addMood } from "../../reducers/moods";

export default function IAPage() {
  // Sélecteur pour obtenir les informations de l'utilisateur depuis le store Redux
  const user = useSelector((state) => state.user.value);
  const router = useRouter();
  const dispatch = useDispatch();

  // États pour gérer la validation, l'étape actuelle, les réponses et l'historique de la conversation
  const [validate, setValidate] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [conversationHistory, setConversationHistory] = useState([]);

  // Références pour le conteneur de la conversation, le bouton de validation et la barre de navigation
  const conversationContainerRef = useRef(null);
  const validateButtonRef = useRef(null);
  const navbarRef = useRef(null);

  // Effet pour faire défiler la conversation vers le bas lorsque l'historique change
  useEffect(() => {
    if (conversationContainerRef.current) {
      conversationContainerRef.current.scrollTop =
        conversationContainerRef.current.scrollHeight;
    }
  }, [conversationHistory]);

  // Effet pour faire défiler vers le bouton de validation lorsque la validation est activée
  useEffect(() => {
    if (validate && validateButtonRef.current) {
      validateButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [validate]);

  // Référence et effet pour le défilement initial
  const scrollRef = useRef(null);
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Questions pour l'utilisateur
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
      question:
        "Parfait, et tu voudrais regarder un film de quelle nationalité ?",
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
    {
      question: "Une préférence pour la période ?",
      options: [
        "Plutôt vieux (avant les années 60)",
        "Années 60 à 2000",
        "Moderne (2000 à 2020)",
        "2020 à aujourd'hui",
        "Indifférent",
      ],
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
  ];

  // Fonction pour gérer les réponses de l'utilisateur
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
      // On récupère les préférences de l'utilisateur
      const preferences = {
        genre: answers[0],
        country: answers[1],
        release_year: answers[2],
        time: answers[3],
        popularity: answer,
      };
      fetchRecommendation(user.token, preferences);
    }
  };

  // Fonction pour récupérer les recommandations de films
  const fetchRecommendation = (token, preferences) => {
    fetch("https://site--moodvies--5xx8wnrqybfd.code.run/recommendation/customRec", {
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
        // Si des recommandations sont trouvées, les ajouter à l'état global
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

  // Fonction pour gérer le clic sur le bouton "Valider"
  function handleClick() {
    dispatch(addMood(["Sélectif"]));
    router.push(`/movies`);
  }

  return (
    <>
      <div className="relative w-screen h-screen flex flex-col bg-center">
        <div className="absolute inset-0 bg-black" style={{ zIndex: 2 }}></div>

        <div ref={navbarRef}>
          <Navbar />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center gap-5 my-auto mx-32 z-10 inset-0">
          <div>
            <h3
              id="scroll"
              ref={scrollRef}
              className="text-slate-100 font-extrabold text-3xl text-center mb-6 mt-48"
            >
              Votre film sur mesure
            </h3>
            <p className="text-slate-100 text-center mb-6">
              Notre IA Maud est là pour vous aider à trouver le film parfait qui
              correspond à votre humeur et vos envies du moment.
            </p>
          </div>

          <div className="relative rounded-xl first-letter:mx-auto h-full text-slate-100 w-full md:w-3/4 lg:w-4/5">
            <BorderBeam />
            <div
              ref={conversationContainerRef}
              className="rounded-xl m-10 bg-zinc-900 py-16 overflow-y-auto max-h-[70vh]"
            >
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
                    {entry.type === "question"
                      ? "Maud"
                      : `${
                          user.username.charAt(0).toUpperCase() +
                          user.username.slice(1)
                        }`}{" "}
                    - {entry.time}
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

          <div
            className="flex justify-center items-center mt-6"
            ref={validateButtonRef}
          >
            {validate && (
              <Button
                variant="gradientPurple"
                className="w-96 text-slate-100"
                onClick={handleClick}
              >
                Valider
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
