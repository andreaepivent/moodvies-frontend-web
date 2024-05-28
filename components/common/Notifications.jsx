import { useDispatch, useSelector } from "react-redux";
import { faBell, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeNotification } from "@/reducers/notifications";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";

// Hook personnalisé pour obtenir la valeur précédente
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Notifications = ({ showNotifications, setShowNotifications }) => {
  const notifications = useSelector((state) => state.notifications);
  const [notificationsSeen, setNotificationsSeen] = useState(true);

  const dispatch = useDispatch();

  const previousNotificationsLength = usePrevious(notifications.length);

  useEffect(() => {
    if (notifications.length > 0) {
      setNotificationsSeen(false);
    }
  }, [notifications]);

  function handleNotification() {
    setShowNotifications(!showNotifications);
    setNotificationsSeen(true);
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
    <div className="relative">
      <FontAwesomeIcon
        icon={faBell}
        className="text-slate-100 size-6 cursor-pointer mt-2"
        onClick={() => handleNotification()}
      />

      {!notificationsSeen && notifications.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {notifications.length}
        </span>
      )}
      {showNotifications && (
        <div className="bg-stone-950/75 absolute -right-0 mt-6 w-96 border rounded-lg shadow-lg ">
          <ScrollArea className="h-72 rounded-md border text-slate-100">
            <div className="p-4">
              <h4 className="mb-4 text-2xl font-medium leading-none text-center">
                Notifications
              </h4>
              {notifications.map((notification, index) => (
                <>
                  <div
                    key={notification.id}
                    className="text-md rounded-lg flex justify-between items-center hover:bg-stone-900 cursor-pointer"
                  >
                    <div>
                      <p>
                        {" "}
                        New movie:
                        <span className="font-bold text-purple-500 ml-2 mr-2">
                          {notification.title}
                        </span>
                        available on
                        <span className="text-green-500 ml-2">
                          {" "}
                          {notification.date}
                        </span>
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className=" cursor-pointer ml-2 hover:bg-stone-900 size-5"
                      onClick={() => handleRemoveNotification(index)}
                    />
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default Notifications;
