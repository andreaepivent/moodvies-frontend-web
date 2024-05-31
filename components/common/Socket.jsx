import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  addNotification,
  removeNotification,
  deleteNotification,
} from "@/reducers/notifications";

export default function Socket() {
  const dispatch = useDispatch(); // Initialise le hook useDispatch pour dispatcher des actions Redux

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000"); // Établit une connexion WebSocket avec le serveur

    // Événement déclenché lorsque la connexion est établie
    socket.on("connect", () => {
      console.log("Socket connected to server");
    });

    // Événement déclenché lorsque le serveur envoie une notification de film ajouté
    socket.on("movieAdded", (movieData) => {
      dispatch(addNotification(movieData)); // Ajoute une notification avec les données du film ajouté
      dispatch(deleteNotification(true)); // Indique qu'il y a de nouvelles notifications
    });

    // Événement déclenché lorsque le serveur envoie une notification de film supprimé
    socket.on("movieDeleted", (movieId) => {
      dispatch(removeNotification(`A movie was deleted with ID: ${movieId}`)); // Supprime une notification basée sur l'ID du film supprimé
    });

    // Nettoyage de l'effet : déconnexion du socket lorsque le composant est démonté
    return () => {
      socket.disconnect();
    };
  }, [dispatch]); // Le tableau de dépendances contient dispatch pour éviter les problèmes de referentialité

  return null; // Ce composant n'affiche rien, il est utilisé uniquement pour gérer les sockets
}
