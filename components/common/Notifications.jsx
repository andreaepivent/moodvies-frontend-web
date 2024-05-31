import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faBell, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  removeNotification,
  deleteNotification,
} from "@/reducers/notifications";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Hook personnalisé pour obtenir la valeur précédente d'une variable
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; // Met à jour la valeur de référence à chaque rendu
  }, [value]);
  return ref.current; // Retourne la valeur précédente
}

export default function Notifications({
  showNotifications,
  setShowNotifications,
}) {
  // Récupère les notifications depuis le store Redux
  const notifications = useSelector((state) => state.notifications.value);
  // Récupère l'état indiquant si les notifications doivent être affichées
  const notificationsShow = useSelector((state) => state.notifications.boolean);

  const [notificationsSeen, setNotificationsSeen] = useState(true); // État pour suivre si les notifications ont été vues

  const dispatch = useDispatch();

  // Utilise le hook personnalisé pour obtenir la longueur précédente des notifications
  const previousNotificationsLength = usePrevious(
    notifications ? notifications.length : 0
  );

  // Utilise un effet pour mettre à jour l'état des notifications vues lorsqu'il y a de nouvelles notifications
  useEffect(() => {
    if (notifications && notifications.length > 0) {
      setNotificationsSeen(false);
    }
  }, [notifications]);

  // Gère l'affichage et la mise à jour des notifications
  function handleNotification() {
    setShowNotifications(!showNotifications);
    setNotificationsSeen(true);
    dispatch(deleteNotification(false)); // Action pour indiquer que les notifications ont été vues
  }

  // Gère la suppression d'une notification
  function handleRemoveNotification(index) {
    dispatch(removeNotification(index)); // Dispatch de l'action pour supprimer la notification

    // Met à jour l'état des notifications vues en fonction de la longueur actuelle des notifications
    if (previousNotificationsLength >= notifications.length) {
      setNotificationsSeen(false);
    } else {
      setNotificationsSeen(true);
    }
  }

  return (
    <div className="relative mr-2">
      <FontAwesomeIcon
        icon={faBell}
        className="text-slate-100 size-6 cursor-pointer mt-2"
        onClick={() => handleNotification()} // Affiche ou cache les notifications au clic
      />

      {/* Affiche le nombre de notifications non vues */}
      {notificationsShow && !notificationsSeen && notifications.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {notifications.length}
        </span>
      )}

      {/* Affiche un message lorsque il n'y a pas de notifications */}
      {notifications && notifications.length === 0 && !showNotifications && (
        <div className="bg-stone-950/95 absolute -right-0 w-60 border rounded-lg shadow-lg z-20">
          <ScrollArea className="h-22 rounded-md border text-slate-100">
            <div className="p-4 text-center text-gray-400">
              Aucune notification pour l'instant
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Affiche la liste des notifications */}
      {showNotifications && notifications.length > 0 && (
        <div className="bg-stone-950/95 absolute -right-0 w-96 border rounded-lg shadow-lg z-20">
          <ScrollArea className="h-60 rounded-md border text-slate-100">
            <div className="p-4">
              {notifications &&
                notifications.map((notification, index) => (
                  <React.Fragment key={index}>
                    <div className="text-md rounded-lg flex justify-between items-center hover:bg-stone-900 cursor-pointer">
                      <div className="flex">
                        <Image
                          src={`https://image.tmdb.org/t/p/original${
                            notification.backdrop
                              ? notification.backdrop
                              : notification.poster
                          }`}
                          alt={notification.title ? notification.title.fr : ""}
                          width={80}
                          height={80}
                        />
                        <p className="ml-4">
                          <span className="font-bold text-purple-500 mr-2">
                            {notification.title
                              ? notification.title.fr
                              : "Un nouveau film"}
                          </span>
                          a été ajouté !
                        </p>
                      </div>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="cursor-pointer ml-2 hover:bg-stone-900 size-5"
                        onClick={() => handleRemoveNotification(index)} // Supprime la notification au clic
                      />
                    </div>
                    <Separator className="my-2" />
                  </React.Fragment>
                ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
