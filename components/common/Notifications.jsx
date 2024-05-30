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

// Hook personnalisé pour obtenir la valeur précédente
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Notifications = ({
  showNotifications,
  setShowNotifications,
  currentLanguage = "en",
}) => {
  const notifications = useSelector((state) => state.notifications.value);
  const notificationsShow = useSelector((state) => state.notifications.boolean);

  console.log(notificationsShow);
  const [notificationsSeen, setNotificationsSeen] = useState(true);

  const dispatch = useDispatch();

  const previousNotificationsLength = usePrevious(
    notifications ? notifications.length : 0
  );

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      setNotificationsSeen(false);
    }
  }, [notifications]);

  function handleNotification() {
    setShowNotifications(!showNotifications);
    setNotificationsSeen(true);
    dispatch(deleteNotification(false));
  }

  function handleRemoveNotification(index) {
    dispatch(removeNotification(index));

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
        onClick={() => handleNotification()}
      />

      {notificationsShow && !notificationsSeen && notifications.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {notifications.length}
        </span>
      )}

      {notifications && notifications.length === 0 && !showNotifications && (
        <div className="bg-stone-950/75 absolute -right-0 w-60 border rounded-lg shadow-lg z-20">
          <ScrollArea className="h-22 rounded-md border text-slate-100">
            <div className="p-4 text-center text-gray-400">
              Aucune notification pour l'instant
            </div>
          </ScrollArea>
        </div>
      )}

      {showNotifications && notifications.length > 0 && (
        <div className="bg-stone-950/75 absolute -right-0 w-96 border rounded-lg shadow-lg z-20">
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
                        onClick={() => handleRemoveNotification(index)}
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
};

export default Notifications;
