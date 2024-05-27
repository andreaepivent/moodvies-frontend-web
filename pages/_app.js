import "@/styles/globals.css";
import { Lato } from "next/font/google";
import * as React from "react";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import user from "../reducers/user";
import movies from "../reducers/movies";
import platforms from "../reducers/platforms";
import recommendations from "../reducers/recommendations";
import { NextUIProvider } from "@nextui-org/system";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const reducers = combineReducers({ user, platforms, movies, recommendations });
const persistConfig = { key: "applicationName", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <main className={lato.className}>
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>
    </NextUIProvider>
  );
}
