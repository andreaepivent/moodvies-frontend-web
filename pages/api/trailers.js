// pages/api/trailers.js

export default async function handler(req, res) {
  const movieList = [
    { id: 315541, title: "Stargate" }, // Ok
    { id: 8675, title: "Lawrence of Arabia – 70mm" },
    { id: 7772, title: "Raiders of the Lost Ark" }, // Ok
    { id: 184126, title: "The Martian" },

    // { id: 1685, title: "The Adventures of Priscilla, Queen of the Desert" },
    // { id: 2756, title: "Mad Max" },
    // { id: 3427, title: "From Dusk Till Dawn" },
    // { id: 4167, title: "Woman in the Dunes" },
    // { id: 6650, title: "The English Patient" },
    // { id: 21448, title: "Three Kings" },
    // { id: 59906, title: "There will be Blood" },
    // { id: 62407, title: "The Fall" },
  ];

  const randomIndex = Math.floor(Math.random() * movieList.length);
  const randomMovieId = movieList[randomIndex].id;

  const url = `https://api-gate2.movieglu.com/trailers/?film_id=184126`;

  const headers = {
    "api-version": process.env.NEXT_PUBLIC_MOVIEGLU_API_VERSION,
    Authorization: `Basic ${process.env.NEXT_PUBLIC_MOVIEGLU_API_TOKEN}`,
    client: process.env.NEXT_PUBLIC_MOVIEGLU_API_CLIENT,
    "x-api-key": process.env.NEXT_PUBLIC_MOVIEGLU_API_KEY,
    "device-datetime": new Date().toISOString(),
    territory: process.env.NEXT_PUBLIC_MOVIEGLU_TERRITORY,
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      res
        .status(response.status)
        .json({ error: `HTTP error! status: ${response.status}` });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
