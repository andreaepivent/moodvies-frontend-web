// pages/api/trailers.js

export default async function handler(req, res) {
  // Liste de films avec leurs identifiants et titres
  const movieList = [
    { id: 315541, title: "Stargate" }, // Ok
    { id: 8675, title: "Lawrence of Arabia – 70mm" },
    { id: 7772, title: "Raiders of the Lost Ark" }, // Ok
    { id: 184126, title: "The Martian" },

    { id: 1685, title: "The Adventures of Priscilla, Queen of the Desert" },
    { id: 2756, title: "Mad Max" },
    { id: 3427, title: "From Dusk Till Dawn" },
    { id: 4167, title: "Woman in the Dunes" },
    { id: 6650, title: "The English Patient" },
    { id: 21448, title: "Three Kings" },
    { id: 59906, title: "There will be Blood" },
    { id: 62407, title: "The Fall" },
  ];

  // Sélectionne un film aléatoire dans la liste
  const randomIndex = Math.floor(Math.random() * movieList.length);
  const randomMovieId = movieList[randomIndex].id;

  // URL de l'API pour obtenir les bandes-annonces
  // const url = `https://api-gate2.movieglu.com/trailers/?film_id=${randomMovieId}`;

  // URL de l'API pour obtenir la bande-annoncde the martian car id des autres films bug
  const url = `https://api-gate2.movieglu.com/trailers/?film_id=184126`;

  // En-têtes de la requête à l'API MovieGlu
  const headers = {
    "api-version": process.env.NEXT_PUBLIC_MOVIEGLU_API_VERSION,
    Authorization: `Basic ${process.env.NEXT_PUBLIC_MOVIEGLU_API_TOKEN}`,
    client: process.env.NEXT_PUBLIC_MOVIEGLU_API_CLIENT,
    "x-api-key": process.env.NEXT_PUBLIC_MOVIEGLU_API_KEY,
    "device-datetime": new Date().toISOString(),
    territory: process.env.NEXT_PUBLIC_MOVIEGLU_TERRITORY,
  };

  try {
    // Envoi de la requête à l'API MovieGlu
    const response = await fetch(url, { headers });
    if (!response.ok) {
      // Si la réponse n'est pas ok, renvoie une erreur HTTP avec le statut
      res
        .status(response.status)
        .json({ error: `HTTP error! status: ${response.status}` });
      return;
    }
    // Récupère les données JSON de la réponse
    const data = await response.json();
    // Renvoie les données avec un statut 200 (succès)
    res.status(200).json(data);
  } catch (error) {
    // En cas d'erreur, renvoie une erreur 500 avec le message d'erreur
    res.status(500).json({ error: error.message });
  }
}
