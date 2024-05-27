import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export default function Socket({ onNotification }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000"); // Création du socket et lien avec le serveur
    setSocket(socket); // Stockage du socket dans le state

    console.log(socket);

    // Connection du socket au serveur
    socket.on("connect", () => {
      console.log("Socket connected to server");
    });

    // Écouter les événements de réception de notifications du serveur
    socket.on("movieAdded", (movie) => {
      console.log(movie);
      onNotification(`New movie available : ${movie}`);
    });

    socket.on("dateAdded", (date) => {
      console.log(date);
      onNotification(`on ${date}`);
    });

    socket.on("movieDeleted", (movieId) => {
      onNotification(`A movie was deleted with ID: ${movieId}`);
    });

    return () => {
      socket.off("connect"); // Débranche l'écoute du socket "connect"
      socket.disconnect(); // Déconnecte le socket du serveur
    };
  }, [onNotification]);

  return null; // Pas besoin de rendre quoi que ce soit pour ce composant
}
