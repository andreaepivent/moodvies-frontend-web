import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  addNotification,
  removeNotification,
  deleteNotification,
} from "@/reducers/notifications";

export default function Socket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Socket connected to server");
    });

    socket.on("movieAdded", (movieData) => {
      dispatch(addNotification(movieData));
      dispatch(deleteNotification(true));
    });

    socket.on("movieDeleted", (movieId) => {
      dispatch(removeNotification(`A movie was deleted with ID: ${movieId}`));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return null;
}
