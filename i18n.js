import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // langue par défaut si la langue de l'utilisateur n'est pas trouvée
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // chemin pour les fichiers de traduction
    },
    interpolation: {
      escapeValue: false, // pour réagir à l'échappement par défaut
    },
  });

export default i18n;