import React from "react";
import Image from "next/image";

function HomePageMiddle() {
  return (
    <div className="flex flex-col content-start">
      <h1 className="text-center text-6xl font-bold text-white mt-20">
        Moodvies, en quelques mots
      </h1>
      <p className="text-white text-center w-3/4 mx-auto mt-4">
        Chez Moodvies, nous comprenons que vos émotions jouent un rôle crucial
        dans votre choix de film. Que vous soyez joyeux, mélancolique,
        aventureux ou simplement détendu, notre plateforme est conçue pour vous
        proposer des films qui résonnent avec votre état d'esprit actuel.
      </p>
      <div>
        <div className="w-full h-full absolute left-1/3">
          <Image
            className="pointer-events-none"
            src="/home/Graduate3.png"
            alt="Graduate"
            width={500} // Ajoutez les dimensions appropriées
            height={500}
          />
        </div>

        <div className="w-full h-full absolute top-2/4 right-1/4">
          <Image
            className="pointer-events-none"
            src="/home/Graduate1.png"
            alt="Graduate"
            width={500} // Ajoutez les dimensions appropriées
            height={500}
          />
        </div>

        <div className="flex justify-center items-center basis-1/4 grow z-10">
          <Image
            className="mt-20 mr-4 w-19 h-20"
            src="/home/icon_1.png"
            alt="icon-filmstrip"
            width={80} // Ajoutez les dimensions appropriées
            height={80}
          />
          <div className="content-center w-4/12 mt-20 z-10">
            <h2 className="text-left text-fuchsia-500 font-bold mb-3">
              Découvrez des films en fonction de votre humeur
            </h2>
            <p className="text-left text-white">
              Sélectionnez votre humeur parmi une variété d'options et laissez
              notre algorithme intelligent filtrer et recommander des films qui
              correspondent parfaitement à votre ressenti du moment. Vous
              découvrirez ainsi des perles cinématographiques qui sauront
              sublimer votre expérience de visionnage, en phase avec vos
              émotions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center basis-1/4 grow z-10">
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-right text-fuchsia-500 font-bold mb-3">
            Assistance intelligente
          </h2>
          <p className="text-right text-white">
            Vous avez une idée précise en tête pour votre prochaine soirée film
            ? Ne cherchez plus. Notre assistante intelligente, Maud, est là pour
            vous aider à trouver le film parfait. Grâce à une technologie de
            pointe et une compréhension approfondie de vos préférences, Maud est
            capable de vous guider à travers notre vaste bibliothèque de films.
          </p>
        </div>
        <Image
          className="mt-20 ml-4 w-19 h-20"
          src="/home/icon_2.png"
          alt="icon-robot"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
      </div>

      <div className="flex justify-center items-center basis-1/4 grow z-10">
        <Image
          className="mt-20 mr-4 w-19 h-20"
          src="/home/icon_3.png"
          alt="icon-users"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-left text-fuchsia-500 font-bold mb-3">
            Visionnage collaboratif en temps réel <br />
            (en cours de développement)
          </h2>
          <p className="text-left text-white">
            Moodvies vous permet de créer des expériences de visionnage
            collaboratif en temps réel. Synchronisez-vous avec vos amis pour
            regarder le même film en même temps et partagez vos réactions en
            direct !
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center basis-1/4 grow z-10">
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-right text-fuchsia-500 font-bold mb-3">
            Intégrations transparentes avec les services cloud <br /> (en cours
            de développement)
          </h2>
          <p className="text-right text-white">
            Notre plateforme utilise des intégrations API puissantes pour
            améliorer votre expérience. Connectez-vous facilement à vos services
            de streaming préférés et découvrez de nouveaux contenus sans effort.
          </p>
        </div>
        <Image
          className="mt-20 ml-4 w-19 h-20"
          src="/home/icon_4.png"
          alt="icon-box"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
      </div>
    </div>
  );
}

export default HomePageMiddle;
